---
id: rollout
title: Percentage rollout
---

Pioneer provides the option to specify which percentage of your users will receive the feature flag using a rollout percentage. 

Rolling out a new microservice to an increasing number of users enables you to test the microservice under different load conditions and only expose a subset of users to a potentially sub-standard user experience, if any issues occur. 

### How to utilise a rollout percentage

To utilize a rollout percentage in your application, a few basic conditions need to be met. 

The first is simple: *the flag needs to be toggled on*. If the flag itself is toggled off, it does not matter what rollout percentage you may have set, the flag will always return `false` and the user will not receive the feature flag. 

The second is just as straightforward: *the flag must have a rollout percentage assigned to it, greater than `0`*, which happens to be the default rollout percentage. If the flag is toggled on and a context is created for the SDK (more on that following), but the rollout percent is `0`, again, the feature flag will always return `false` and the user will not receive the feature flag. 

The last condition is also quite easy: *the SDK client must be given a 'user-context'* within your application code. The context for an SDK is created using a unique identifier (such as a session cookie, for example) that can serve to identify individual users. With the context in place, the SDK will then use the rollout percentage to determine if the user receives the feature flag or not.

For more specific information on how to create contexts for the SDK in your application, please refer to the specific SDK documentation for your chosen language.