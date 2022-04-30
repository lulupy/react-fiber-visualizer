import mx from "../mxgraph";
import Fiber from "./Fiber";


class FiberTree {
  constructor({ graph, fiberTree }) {
    this.graph = graph;
    this.parent = this.graph.getDefaultParent();
    this.fiberTree = fiberTree;
    this.fiberCells = [];
  }

  createTree() {
    this.buildTree([this.fiberTree.tree]);
  }

  getRoot() {
    return this.fiberCells[0].node;
  }
  buildTree(children, parentCell = null) {
    for(let i=0; i<children.length; i++) {
      const item = children[i];
  
      var fiberCell = new Fiber({
        graph: this.graph,
        fiber: this.fiberTree.fibers[item.id],
        parent: this.parent,
        fiberTree: this.fiberTree,
      });
      
      this.fiberCells.push(fiberCell);
  
      if(parentCell) {
        this.graph.insertEdge(this.parent, null, 'child', parentCell, fiberCell.node);
      }
      if(item.children) {
        this.buildTree(item.children, fiberCell.node);
      }
    }
  }
}


export default FiberTree;
