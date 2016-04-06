# CometD library for CJS.

This is little more than taking the [CometdD JavaScript library](https://github.com/cometd/cometd) and making each component available via [module.exports](http://nodejs.org/docs/latest/api/modules.html#modules_module_exports).

The `org.cometd` namespace is not needed. Neither is jQuery!

However you need to set up the XHR yourself.

This is based on the CometD 3.0.3 JavaScript library.

## Example

```javascript


const { CometD, LongPollingTransport, Transport, BindReloadExtension } = require('cometd-cjs');

// You need to implement the XHR for the transports.
function LongPoller() {

  const transport = Transport.derive(new LongPollingTransport());

  transport.xhrSend = packet => {

    const xhr  = new XMLHttpRequest();
    const data = JSON.parse(packet.body);

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

const cometd = new CometD();

// The bindX functions return the "org" object with the given extension "bound".
const { ReloadExtension } = bindReloadExension();

cometd.registerTransport('long-polling', new LongPoller());
cometd.registerExtension('reload', new ReloadExtension());

cometd.init('<somewhere>/cometd');

cometd.addListener('/meta/connect', message => {

  console.log(message);

});

```

## References

[cometd at github](https://github.com/cometd/cometd)

[cometd JavaScript library docs](http://docs.cometd.org/3/reference/#_javascript)

## Also see

[cometd-jquery](https://github.com/wilmoore/cometd-jquery)
