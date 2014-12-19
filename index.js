/*
 * Copyright (c) 2008-2014 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

///////////////////////////////////////////////////////////////////////////////
//
// CometD library for CJS.
//
///////////////////////////////////////////////////////////////////////////////


/* ----------------------------------------------
Suppose something like
org-namespace
module.exports = {};



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
org.cometd.Websocket // sorta?

exports:
org.cometd.WebSocketTransport


--------------------------
/org/cometd/CometD.js

imports:
org.cometd.TransportRegistry
org.cometd.Utils

exports:
org/cometd.CometD
org.cometd.Websocket

*/


// Think
// This is split up, probably so it can be made smaller if desired.
// the org namespace is kinda dangerous - :e


module.exports = require('./src/CometD');

