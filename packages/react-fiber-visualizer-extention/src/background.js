let portOfPanel = null
let portOfContent = null 
function handleMessageFromPanel(message, sender, sendResponse) {
  if(portOfContent) {
    portOfContent.postMessage(message)
  }
}

function handleMessageFromContent(message, sender, sendResponse) {
  if(portOfPanel) {
    portOfPanel.postMessage(message)
  }
}

chrome.runtime.onConnect.addListener(function (port) {
  if(port.name === 'fiber-panel') {
    console.log('来自fiber-panel的连接')
    portOfPanel = port
    port.onMessage.addListener(handleMessageFromPanel)
  }

  if(port.name === 'content-script') {
    console.log('来自content-script的连接')
    portOfContent = port
    port.onMessage.addListener(handleMessageFromContent)
  }
})