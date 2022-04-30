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

const container = document.querySelector('#container')
const graph = new FiberTreeGraph(container)
port.onMessage.addListener((message) => {
  
  graph.show(message);
});




