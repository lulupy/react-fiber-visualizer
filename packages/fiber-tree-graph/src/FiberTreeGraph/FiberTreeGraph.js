import mx from '../mxgraph';
import { COLOR } from './constants';
import FiberTree from './FiberTree';

export default class FiberTreeGraph {
  constructor(container) {
    this.container = container;
    this.graph = null;
  }
  show(snapshoot) {
    if(this.graph) {
      this.graph.destroy();
    }

    this.graph = _FiberTreeGraph(this.container, snapshoot)
  }

  getXml() {
    if(this.graph) {
      const enc = new mx.mxCodec();
      const model = this.graph.getModel();
      const node = enc.encode(model);
      return node;
    }
  }
}

function _FiberTreeGraph(container, snapshoot) {
  const graph = new mx.mxGraph(container);
  
  // graph设置
  graph.foldingEnabled = false; // 不使用收起展开功能
  graph.constrainChildren = false; // 父元素不包含子元素
  graph.extendParentsOnAdd = false;
  graph.extendParents = false;
  

  // tree layout
  const treeLayout = new mx.mxCompactTreeLayout(graph, false);
  treeLayout.useBoundingBox = false;
  treeLayout.edgeRouting = false;
  treeLayout.levelDistance = 30;
  treeLayout.nodeDistance = 40;
  treeLayout.marginTop = 50;
  treeLayout.marginBottom = 50;
  treeLayout.marginLeft = 50;
  treeLayout.marginRight = 50;
  treeLayout.isVertexIgnored = function(vertex){
    return graph.getCurrentCellStyle(vertex)['isFiber'] !== 1;
  }

  const parent = graph.getDefaultParent();
  console.log(parent)
  parent.geometry = new mx.mxGeometry(100);
  graph.getModel().beginUpdate();

  const fiberRootCell = graph.insertVertex(parent, null, 'fiberRoot',0, 0, 60, 30, `isFiber=1;shape=ellipse;fillColor=${COLOR.orange};strokeColor=#666666;`);
  if(snapshoot.alternateTree) {
    const alternateTree = new FiberTree({
      graph,
      fiberTree: {
        ...snapshoot.alternateTree,
        workInProgress: snapshoot.workInProgress,
      },
    });
    alternateTree.createTree();
    graph.insertEdge(parent, null, '', fiberRootCell, alternateTree.getRoot(), 'edgeStyle=none;curved=0;orthogonalLoop=1;jettySize=auto;html=1;endArrow=none;endFill=0;dashed=1;');
  }

  if(snapshoot.currentTree) {
    const currentTree = new FiberTree({
      graph,
      fiberTree: snapshoot.currentTree,
    });
    
    currentTree.createTree();
    graph.insertEdge(parent, null, 'current', fiberRootCell, currentTree.getRoot());

  }

  
  
  

  treeLayout.execute(parent);



  graph.getModel().endUpdate();


  return graph;
}


