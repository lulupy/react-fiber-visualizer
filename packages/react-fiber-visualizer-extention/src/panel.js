import FiberTreeGraph from 'fiber-tree-graph'
// connection from background script
var port = chrome.runtime.connect({
  name: "fiber-panel"
})

const button = document.querySelector('button')

button.addEventListener('click', () => {
  port.postMessage({
    message: 'requestFiber',
  })
})

port.onMessage.addListener((message) => {
  const container = document.querySelector('#container')
  new FiberTreeGraph(container, message)
});




