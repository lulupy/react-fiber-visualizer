import FiberTreeGraph from '../../src/index'
import snapshoot from './snapshoot'
window.addEventListener('load', function () {
  const container = document.querySelector('#root')
  console.log(container)
  const graph = new FiberTreeGraph(container, snapshoot)
  
})