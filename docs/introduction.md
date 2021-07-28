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

Pioneer is a self-hosted application that can be installed on your own server and run with just a single command.

## Why use Pioneer?
Using a feature flag management tool, such as Pioneer, enables you to minimize the risk of outages when introducing microservices into your architecture. If a new microservice causes any issues in your deployed application, you can switch the microservice off with just a toggle of a button and revert to the previous code in real-time, without the need for redeployment.

This results in significantly less downtime and reduces the strain of incident management of your team. Pioneer is easy to use out-of-the-box, with no steep learning curve or extensive configuration required.

## How does Pioneer work?

**Summary diagram**

In order to use Pioneer in your application you need to run Pioneer on your own server. Running Pioneer locally removes any risk of confidential feature flag or user data being accessed outside of your system.

Feature flag creation/deletion/editing all occurs via a Graphical User Interface (GUI), running at `http://localhost:3000`. Any changes made in the GUI will take affect immediately in your application.

Pioneer is integrated into your application via an SDK. Pioneer SDKs are available in Ruby, NodeJS or Go. 

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