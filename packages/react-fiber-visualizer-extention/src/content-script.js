const nullthrows = (v) => {
  if (v == null) throw new Error("it's a null");
  return v;
}

function injectCode(src) {
  const script = document.createElement('script');
  // This is why it works!
  script.src = src;
  script.onload = function () {
    console.log("script injected");
    this.remove();
  };

  // This script runs before the <head> element is created,
  // so we add the script to <html> instead.
  nullthrows(document.head || document.documentElement).appendChild(script);
}

injectCode(chrome.runtime.getURL('dist/injected-script.js'));

// connection from background script
const port = chrome.runtime.connect({
  name: "content-script"
})

port.onMessage.addListener((message) => {
  if(message.message === 'requestFiber') {
    window.postMessage({
      source: 'content-script',
      type: 'requestFiber',
    })
  }
});

window.addEventListener('message', (event) => {
  if (event.source !== window) {
    return;
  }
  var message = event.data;

  if(message.source === 'injected-script') {

    port.postMessage(message.snapshoot)
  }
})


