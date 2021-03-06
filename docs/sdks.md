---
id: Utilising sdks
---        

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Ruby', value: 'rb', },
    { label: 'Go', value: 'go', },
  ]
}>
<TabItem value="js">

```js
// require the SDK
const SDK = require("pioneer-javascript-sdk");
// if the actual address has a path, include that in the getServerAddress() method
const scoutAddress = "http://localhost:3030";
// the sdkKey that should match the sdkKey provided by Compass
const sdkKey = "JazzyElksRule";
// makes an active sse connection
const config = await new SDK(scoutAddress, sdkKey).connect().withWaitForData();
const sdkClient = config.client;
// gets the feature value
console.log(sdkClient.getFeature("LOGIN_MICROSERVICE"));
```

</TabItem>
<TabItem value="rb">

```rb
require 'pioneer_ruby_sdk'
sdk_client = PioneerRubySdk.new('/path/to/scout', 'sdk_key')
sdk_connection = sdk_client.connect().with_wait_for_data()
```

</TabItem>
<TabItem value="go">

```go
// Initialize an SDK client
scoutDaemon := "http://localhost:3030"
sdkKey := "a-dummy-key"
client := sdk.InitMember(scoutDaemon, sdkKey)

// connect SDK client to Scout to listen for SSE updates
client.Connect()
client.Listen()
```

</TabItem>
</Tabs>