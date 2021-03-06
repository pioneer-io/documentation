---
id: javascript-sdk-doc
title: Node.js SDK 
---

[![Test](https://github.com/pioneer-io/javascript-sdk/actions/workflows/verify.yml/badge.svg)](https://github.com/pioneer-io/javascript_sdk/actions/workflows/verify.yml)

[![npm Reference](./assets/npm_badge.svg)](https://www.npmjs.com/package/pioneer-javascript-sdk)

## Installation

Run the following command inside an npm project for the package.
```
npm install pioneer-javascript-sdk
```

## Basic Usage

To initialize a new SDK client, you need to pass in the server address and port of Scout for the first parameter. **Scout is the name of a daemon that serves the entire feature ruleset to all connected SDK clients through SSE.** Note, that if the actual endpoint contains a path like "/features", then you should include that in the `getServerAddress()` method of config. In addition, you need to supply an SDK key so that Scout can authenticate requests. This SDK key must match the one provded by Compass, and can be found under the 'Account' tab via the user interface.

After instantiating a new SDK, you can call `connect()` which will attempt to connect with Scout. You should also chain another method called `withWaitForData()`. Calling await on this method will block the code until the SDK receives the entire ruleset from Scout. The SDK will poll for when it receives data from Scout, 10 times with an interval of 1 second. After these polling attempts, if it still has not received data, it will close the connection to avoid overwhelming Scout with requests.

If the connection fails 10 times, an error will be logged to the user and the SDK will stop trying to connect.

After you have connected, the `client` property on the config instance should be where you call `getFeature` to get a certain feature from the ruleset.


```javascript
const SDK = require("pioneer-javascript-sdk");

// if the actual address has a path like localhost:3030/features, include that in the getServerAddress() method
const scoutAddress = "http://localhost:3030";

// the sdkKey that should match the sdkKey provided by Compass
const sdkKey = "JazzyElksRule";

// makes an active sse connection
const config = await new SDK(scoutAddress, sdkKey).connect().withWaitForData();
const sdkClient = config.client;

// gets the feature value
if (sdkClient.getFeature("LOGIN_MICROSERVICE") {
  // route the request to a microservice
} else {
  // call a monolith internal service
};
```

## Adding a Context

This SDK allows you to specify a context when calling the `getFeature` method. A context allows the SDK to evaluate strategies associated with a certain feature state. Before using a context though, the feature flag must have a rollout strategy, greater than 0%, and the feature flag must be toggled on  via the Compass user interface or API. In order to determine whether a user gets that new feature, the developer should supply a userKey that uniquely identifies that user. The SDK will calculate the percentage associated with that uesrKey and if that percentage is lower than 10%, then the SDK will evaluate to true.

```javascript
const SDK = require("pioneer-javascript-sdk");
const scoutAddress = "http://localhost:3030";
const sdkKey = "JazzyElksRule";

// makes an active sse connection
const config = await new SDK(scoutAddress, sdkKey).connect().withWaitForData();

// calling with context returns a new clientWithContext instance
const context = config.withContext({ userKey: "123-456-789" });

// gets the feature value based on userKey and percentage strategy
if (context.getFeature("LOGIN_MICROSERVICE") {
  // route the request to a microservice
} else {
  // call a monolith internal service
};
```

## Supplying default values

Any time you call `getFeature` on either a normal `client` or on a `clientWithContext`, you can supply a default value for the second parameter in case the feature you are trying to index does not exist.

```javascript
// both of the following will return false if the feature "LOGIN_MICROSERVICE" does not exist
sdkClient,getFeature("LOGIN_MICROSERVICE", false);
context.getFeature("LOGIN_MICROSERVICE", false);
```

Thus, if `LOGIN_MICROSERVICE` is not a valid feature, then both statements will log `false`. If no default value is supplied, an error will be thrown.

## Adding Analytics

This SDK uses the `universal-analytics` npm package that allows you to integrate with Google analytics. To add an anlytics instance, simply call the method `addGoogleAnalyticsCollector` with a `trackingId` in the format `UA-XXXXX-X` and an optional `clientId` identifying the current user. The clientId must be in a UUID format or the npm package will generate a default UUID. However, you could also specify that the `strictCidFormat` be false, so you can supply a non-UUID compliant clientId.

```javascript
sdkClient.addGoogleAnalyticsCollector({
  trackingId: 'UA-XXXXX-X',
  clientId: '12345',
  strictCidFormat: false
});
// instantiate a googleAnalyticsCollector on a clientWithContext
context.addGoogleAnalyticsCollector({
  trackingId: 'UA-XXXXX-X',
  clientId: '12345',
  strictCidFormat: false
});
```

Then, to log an event, simply call the `logEvent` method on either the `sdkClient` (client without context) or `context` (client with context) instance. You should pass in a `category`, `action`, `label`, and `value` parameter, wrapped in an object literal. More details can be found on the documentation for Google Analytics.

```javascript
sdkClient.logEvent({
  category: "test",
  action: "print",
  label: "login",
  value: 1
});

context.logEvent({
  category: "test",
  action: "print",
  label: "login",
  value: 1
});
```

# **Documentation**

## **Config**

> The `Config` class is the entry point of the SDK. It is a singleton, so only one instance of it should exist per application built on the SDK.

## Config Constructor

**Parameters:**

`serverAddress`

A string that represents the host name/address and port. Eg: `http://localhost:3030`.  

`sdkKey`

A string that represents the sdk key that is to be used for authorization. Generally, in a UUID format and can be found under the 'Account' tab in the Compass user interface.

## **Instance Properties**

### `Config.prototype.serverAddress`<br/>
ServerAddress and port

### `Config.prototype.sdkKey`<br/>
SDK Key for authorization

### `Config.prototype.client`<br/>
This will refer to a new `EventSourceClient` instance that will be instantiated when you call the `connect` method.

## **Instance Methods**

### `Config.prototype.connect()`<br/>
This will internally create a new `EventSourceClient` instance, which is itself a wrapper for the `eventsource` npm package. It will then have the instance try and connect with the Scout daemon. It will return the config instance for additional method chaining. 

### `async Config.prototype.withWaitForData()`<br/>
This will wait until the `client` instance has received data from Scout. You should only call this after you called connect, otherwise the `client` instance will be undefined. The polling checks for a `hasData` property in the `client` instance, which gets set to true when the `client` receives data from Scout through SSE. This method will attempt to poll 10 times with a waiting interval of 1 second, after which it will close the SSE connection.

### `Config.prototype.withContext()`<br/>
This method should be called after you have connected with Scout. This will return a new `clientWithContext` instance. The parameter is an object literal containing the userKey property: `{ userKey: "123-456-789" }`. Ideally, the `userKey` will be some unique identifier for a user making the request for your app.

### `Config.prototype.getServerAddress()`<br/>
This will return the server address string append with a path for the proper Scout endpoint. This method is used internally when initializing an event source instance, and you probably do not really need to use it except for debugging purposes. Eg: If your server address is `http://localhost:3030`, then this method will return `http://localhost:3030/features`, which will specify the proper path for the Scout endpoint to connect to.


## **EventSourceClient**

> The EventSourceClient class acts as a wrapper for the npm package `eventsource`, which is a polyfill for the `EventSource` constructor. The polyfill will allow us to not only initialize an SSE connection, but also supply custom parameters like an `Authorization` header.

## EventSourceClient Constructor

**Parameters:**
`config`
A `Config` instance should be passed into the constructor.

## **Instance Properties:**

### `EventSource.prototype.config`<br/>
The `Config` instance passed in from the constructor

### `EventSource.prototype.features` <br/>
This will be initialized to an empty object in the constructor. When an SSE connection is established and the SDK client receives the entire feature set from Scout, this property will be populated with that featureset, representing an array of feature state instances. This property will be referenced by the `getFeatures` method and the developer would probably only use this for debuggin purposes.

### `EventSource.prototype.hasData` <br/>
This will be initialized to `false`. Once the SDK client has received data from Scout, this will be set to `true`. This property is checked by the `withWaitForData` method, to poll for when the SDK has received data. It could also be used for debugging purposes by the developer.

### `EventSource.prototype.apiClient` <br/>
This will refer to the actual `eventsource` instance intialized by the polyfill package. You can call methods like `close()` on this instance if you want to manually close the connection.

## **Instance Methods:**

### `EventSource.prototype.getFeature()` <br/>
This will take in a key (string) and a default value (boolean). It will check the `features` ruleset for a matching key and return the value of that feature (a boolean). If a matching key is not found, the method will default to the default value. If a default value is not supplied, it will throw an error.

### `EventSource.prototype.getFeatureState()` <br/>
This method will take in a key and return the feature state in `features` corresponding to that key. If no feature state is found, the method will return undefined.

### `EventSource.prototype.addGoogleAnalyticsCollector()` <br/>
This takes in an object literal, consisting of the following properties:
`{ trackingId: string, clientId: string (optional), strictCidFormat: boolean (optional) }`

| Property | Type | Required |
| -------- | ---- | :--------: |
| trackingId | string | yes |
| clientId | string | no |
| strictCidFormat | boolean | no |

The `trackingId` and `clientId` should both be strings. The `strictCidFormat` is a boolean that specifies whether or not `clientId` should strictly follow the UUID format. If you have a custom `clientId` that does not follow the UUID format, you must set this to `false`, otherwise the package will create a default UUID for the `clientId`.

This method will append an instance of the `AnalyticsCollector` class to a list of analytics collectors and return the instance.

### `EventSource.prototype.logEvent()` <br/>
This method takes in an object literal, consiting of the following properties:
`{ category: string, action: string, label: string, value: number }`

| Property | Type | Required |
| -------- | ---- | :--------: |
| category | string | yes |
| action | string | yes |
| label | string | no <br/> (but recommended) |
| value | string | no |

More info about these properties can be found [here](https://support.google.com/analytics/answer/1033068?hl=en#).

This method will iterate over all appended analytics collectors and call the `logEvent` method on those instances.

## **ClientWithContext**

> This call will be instantiated when you call the `withContext()` method on a `Config` instance. The return value of that method will basically be an instance of `ClientWithContext`.

## **Instance Properties**

### `ClientWithContext.prototype.context` <br/>
An instance of the `Context` class. This basically just has the `userKey` property and a `getKey()` getter method. The context will be factored into calculating the strategy value when calling `getFeature()` on a `clientWithContext` instance.

### `ClientWithContext.prototype.client` <br/>
This refers to the `client` instance of the `EventSourceClient` class.

### `ClientWithContext.prototype.config` <br/>
This referse to the `config` instance of the `Config` class (on which you call the `withContext()` method).

## **Instance Methods**

### `ClientWithContext.prototype.getFeature()` <br/>
This will take in a key (string) and a default value (boolean). It will check the `features` ruleset for a matching key and return the value of that feature (a boolean). If a matching key is not found, the method will default to the default value. If a default value is not supplied, it will throw an error.

The difference between the `getFeature()` method on the `EventSourceClient` instance is that this will evaluate a percentage strategy based on the context, which has the `userKey`. It will sum up the char codes of the `userKey` modulus 100 and return a number between 1-100. If that number is lower than the percentage strategy, it will return true. Otherwise, it will return false.

### `ClientWithContext.prototype.addGoogleAnalyticsCollector()` <br/>
This will basically take in the same parameters as the `addGoogleAnalyticsCollector()` method of `EventSourceClient`. It will then call `addGoogleAnalyticsCollector` on its `client` property with those parameters.

### `ClientWithContext.prototype.logEvent()` <br/>
This will basically take in the same parameters as the `logEvent()` method of `EventSourceClient`. It will then call `logEvent()` on its `client` property with those parameters.

------

## Tests
To run tests, simply run `npm test`, which will run unit tests for most of the classes.
*Note:* Tests are npm ignored, so you have to pull from github for the tests.
