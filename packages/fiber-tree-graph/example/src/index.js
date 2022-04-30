import FiberTreeGraph from '../../src/index'
import snapshoot from './snapshoot'
window.addEventListener('load', function () {
  const container = document.querySelector('#root')
  const graph = new FiberTreeGraph(container)
  graph.show(snapshoot)
  console.log(graph.getXml())
  
})