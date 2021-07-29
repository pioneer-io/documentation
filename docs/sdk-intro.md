---
id: sdk-intro
title: Overview
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

SDKs handle the communication between your application and Pioneer; additionally, they are used within your application code to determine whether a feature flag is switched on or off. 

Pioneer SDKs are available in [JavaScript](/javascript-sdk-doc.md), [Ruby](/ruby-sdk-doc.md) and [Go](/go-sdk-doc.md). This page provides a general overview of SDK features. See the specific language SDK documentation for full details on implementation. 

## Connecting SDK to Pioneer
To establish a connection between the SDK and Pioneer, you must provide the URL of the Scout daemon component of Pioneer (default is `http://localhost:3030`) and the SDK key that is provided in the 'Account' tab of the Pioneer GUI.

## Utilizing the percentage rollout strategy
In order to roll a feature flag out to a specific percentage of users, you need to provide a unique identifier for each individual user. We recommend using a session cookie. This ensures that if a user disconnects and re-connects, they will receive the same feature flag as their previous session. Providing a user identifier is referred to as 'providing a context' in the SDK documentation. 

## Providing default values
When retrieving the value of a feature flag from an SDK within your application code, you can pass in a default value, which will be returned if the specified flag cannot be returned. This is useful if a connection failure occurs between your application and Pioneer. If the SDK cannot retrieve your flag dataset from Pioneer, rather than throwing an error the SDK will return the supplied default value and an error message will be logged. 

<Tabs
  defaultValue='js'
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Ruby', value: 'rb', },
    { label: 'Go', value: 'go', },
  ]
}>
<TabItem value="js">

```js title="/your/application/app.js"
// assuming SDK client has been acquired

// if sdkClient.getFeature('flag name') fails, then true will be returned
if (sdkClient.getFeature('flag name', true)) {
  executeMicroserviceCode();
} else {
  executeMonolithCode();
}
```
</TabItem>

<TabItem value="rb">

```rb title="/your/application/app.rb"
# assuming SDK client has been acquired

# if sdk_client.getFeature('flag name') fails, then true will be returned 
if sdk_client.getFeature('flag name', true)
  execute_microservice_code()
else
  execute_monolith_code()
end
```
</TabItem>

<TabItem value="go">

```go title="/your/application/app.go"
// assuming SDK client has been acquired

// if sdkClient.getFeature('flag name') fails, then true will be returned
if sdkClient.GetWithDefault('flag name', true) {
  executeMicroservice()
} else {
  executeMonolith()
}
```
</TabItem>

</Tabs>

## Google Analytics
All of the SDKs provide the ability to integrate with Google Analytics for data collection.