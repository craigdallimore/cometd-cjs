require('./src/cometd-header');

// There is a bit of namespacing in the cometd library - most parts assume an
// `org.cometd` namespace is available. For ease in keeping this library up to
// date with the official lib, a reference to `org` is added to the top of each
// file in place of the assumed global. As there are some interdependencies,
// the files are requested in a particular order:

// Files                    | Dependencies
// -------------------------+-----------------------------------
// Utils                    |
// TransportRegistry        |
//                          |
// CometD                   | org.cometd.TransportRegistry
//                          | org.cometd.Utils
//                          |
// Transport                | org.cometd.Utils
//                          |
// RequestTransport         | org.cometd.Transport
//                          | org.cometd.Utils
//                          |
// CallbackPollingTransport | org.cometd.RequestTransport
//                          | org.cometd.Transport
//                          |
// LongPollingTransport     | org.cometd.RequestTransport
//                          | org.cometd.Transport
//                          |
// WebSocketTransport       | org.cometd.Utils
//                          | org.cometd.Transport

var org = require('./src/org');

require('./src/Utils');
require('./src/TransportRegistry');
require('./src/CometD');
require('./src/Transport');
require('./src/RequestTransport');
require('./src/CallbackPollingTransport');
require('./src/LongPollingTransport');
require('./src/WebSocketTransport');

exports.cometd = org.cometd;

exports.AckExtension       = require('./src/extensions/AckExtension');
exports.ReloadExtension    = require('./src/extensions/ReloadExtension');
exports.TimeStampExtension = require('./src/extensions/TimeStampExtension');
exports.TimeSyncExtension  = require('./src/extensions/TimeSyncExtension');
