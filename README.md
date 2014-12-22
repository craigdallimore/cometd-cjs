# CometD library for CJS.

This is little more than taking the [CometdD JavaScript library](https://github.com/cometd/cometd) and making each component available via [module.exports](http://nodejs.org/docs/latest/api/modules.html#modules_module_exports).

The `org.cometd` namespace is not needed. Neither is jQuery!

However you need to set up the XHR yourself.

This is based on the CometD 3.0.3 JavaScript library.

## To get the main CometD constructor and an instance:

```javascript
let { CometD, LongPollingTransport, Transport } = require('cometd');

function LongPoller() {

  let transport = Transport.derive(new LongPollingTransport());

  transport.xhrSend = function(packet) => {

    let xhr  = new XMLHttpRequest();
    let data = JSON.parse(packet.body);

    xhr.open('post', packet.url);

    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

    xhr.onreadystatechange = () => {

      if (xhr.readyState === 4) {

        if (xhr.status === 200) {

          packet.onSuccess(xhr.responseText);

        } else {

          packet.onError(xhr.statusText, xhr.response);

        }

      }

    };

    xhr.send(JSON.stringify(data));

  };

  return transport;

}

let cometd = new CometD();

cometd.registerTransport('long-polling', new LongPoller());

let cometd = new CometD(<optional name>);
```

## References

[cometd at github](https://github.com/cometd/cometd)
[cometd JavaScript library docs](http://docs.cometd.org/3/reference/#_javascript)

## Also see

[cometd-jquery](https://github.com/wilmoore/cometd-jquery)
