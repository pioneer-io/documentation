---
id: intro
title: Introduction
slug: '/'
hide_title: true
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign: 'center'}}>
  <img height='20%' width='20%' src={require('./assets/pioneer_color_logo.png').default} alt='Pioneer logo' />
</div>



Welcome to Pioneer, a light-weight feature flag management tool.

Pioneer is a self-hosted application that can be installed on your own server and ran with just a single command.

## Why use Pioneer?
Using a feature flag management tool, such as Pioneer, enables you to minimize the risk of outages when introducing microservices into your architecture. If a new microservice causes any issues in your deployed application, you can switch the microservice off with just a toggle of a button and revert to the previous code in real-time, without the need for redeployment.

This results in significantly less downtime and reduces the strain of incident management on your team. Pioneer is easy to use out-of-the-box, with no steep learning curve or extensive configuration required.

Pioneer also provides the option of rolling out a new microservice to a specified percentage of users. Rolling out a new microservice to an increasing number of users enables you to test the microservice under different load conditions and only expose a subset of users to a potentially sub-standard user experience, if any issues occur. 

## How does Pioneer work?

<div style={{textAlign: 'center'}}>
  <img src={require('./assets/pioneer_architecture.png').default} alt='Pioneer architecture' />
</div>

In order to use Pioneer in your application you need to run Pioneer on your own server. Running Pioneer locally signicantly reduces the risk of confidential feature flag or user data being accessed outside of your system.

Feature flag creation/deletion/editing all occurs via a Graphical User Interface (GUI), running at `http://localhost:3000`. Any changes made in the GUI will take affect immediately in your application. Changes to your feature flag data can also be made by sending the appropriate API request directly to the Compass server; however, we recommend using the GUI for the most straightforward Pioneer experience.

Pioneer is integrated into your application via an SDK. Pioneer SDKs are available in [Ruby](/ruby-sdk-doc.md), [Node.js](/javascript-sdk-doc.md) or [Go](/go-sdk-doc.md). 

The SDK handles the communication between Pioneer and your application code. Within your application, you just need to evaluate if a feature flag is toggled on or off (using boolean values) and execute your code accordingly. 

For example:

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

if (sdkClient.getFeature('flag name')) {
  executeMicroserviceCode();
} else {
  executeMonolithCode();
}
```
</TabItem>

<TabItem value="rb">

```rb title="/your/application/app.rb"
# assuming SDK client has been acquired

if sdk_client.getFeature('flag name')
  execute_microservice_code()
else
  execute_monolith_code()
end
```
</TabItem>

<TabItem value="go">

```go title="/your/application/app.go"
// assuming SDK client has been acquired

if sdkClient.Get('flag name') {
  executeMicroservice()
} else {
  executeMonolith()
}
```
</TabItem>

</Tabs>

For detailed information on integrating an SDK into your application see [integrating SDKs](/sdk-intro.md).
