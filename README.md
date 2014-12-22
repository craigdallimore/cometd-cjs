# CometD library for CJS.

This is little more than taking the [CometdD JaveaScript library](https://github.com/cometd/cometd) and making each component available via [module.exports](http://nodejs.org/docs/latest/api/modules.html#modules_module_exports).

The `org.cometd` namespace is not present.

## To get the main CometD constructor

```javascript
let CometD = require('cometd');
let cometd = new CometD(<optional name>);
```

TODO:
- JSON
- replace jquery/dojo:
 - override LongPollingTransport
 - override CallbackPollingTransport
 - register transports in order
  - Websocket
  - LongPolling
  - Callbackpolling

[webapp](https://github.com/cometd/cometd/tree/master/cometd-javascript/common/src/main/webapp/org/cometd)
- find out what these extensions are for:

 - Ack
 - Reload
 - Timestamp
 - TimeSync


## Rough scrappy notes, please ignore

/org/cometd/cometd-json.js
exports:
org.cometd.JSON

--------------------------
/org/cometd/Utils.js

exports:
org.cometd.Utils

--------------------------
/org/cometd/TransportRegistry.js

exports:
org.cometd.TransportRegistry

--------------------------
/org/cometd/Transport.js

imports:
org.cometd.Utils
org.cometd.JSON

exports
org.cometd.Transport
org.cometd.Transport.derive

--------------------------
/org/cometd/RequestTransport.js

imports:
org.cometd.Utils
org.cometd.Transport
org.cometd.Transport.derive

exports:
org.cometd.RequestTransport

--------------------------
/org/cometd/LongPollingTransport.js

imports:
org.cometd.RequestTransport
org.cometd.Transport.derive
org.cometd.JSON

exports:
org.cometd.LongPollingTransport

--------------------------
/org/cometd/CallbackPollingTransport.js

imports:
org.cometd.RequestTransport
org.cometd.Transport.derive
org.cometd.JSON

exports:
org.cometd.CallbackPollingTransport

--------------------------
/org/cometd/WebSocketTransport.js

imports:
org.cometd.Transport
org.cometd.Transport.derive
org.cometd.JSON
org.cometd.Utils

exports:
org.cometd.WebSocketTransport


--------------------------
/org/cometd/CometD.js

imports:
org.cometd.TransportRegistry
org.cometd.Utils

exports:
org/cometd.CometD
