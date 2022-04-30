import mx from '../mxgraph';
import Effects from './Effects';
import Flags from './Flags';
import getFiberShowName from './getFiberShowName';
import getFiberStyle from './getFiberStyle';


class Fiber {
  constructor({ graph, parent, x = 0, y = 0, fiber, fiberTree }) {
    this.layout = new mx.mxStackLayout(graph, true, 30);
    this.graph = graph;
    if(!parent) {
      parent = graph.getDefaultParent();
    }
    this.parent = parent;
    this.fiber = fiber;
    this.fiberTree = fiberTree;

    const style = `isFiber=1;${getFiberStyle(fiber.tag)}`;
    this.node = graph.createVertex(null, null, getFiberShowName(fiber), x, y, 50, 50, style);
    this.build();
  }

  build() {
    const { fiber, fiberTree, graph, parent, node } = this;
    if(fiber.effects.length > 0) {
      const effects = new Effects({
        graph: graph,
        effects: fiber.effects,
        parent: node,
        x: 100,
        fiberTree,
      });
  
      this.graph.insertEdge(node, null, 'effect', node, effects.node);
    }


    if(fiberTree.workInProgress === fiber.id) {
      const text = this.graph.insertVertex(node, null, 'workInProgress', 100, 15, 75, 20, 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;');
      this.graph.insertEdge(node, null, '', text, node);
    }


    if(fiber.flags.length > 0) {
      const flags = new Flags({
        graph: graph,
        flags: fiber.flags,
        parent: node,
        x: 100,
        y: 20,
      });

      this.graph.insertEdge(node, null, 'flags', node, flags.node);
    }

    // if(fiber.tag === 'HostComponent' && fiber.stateNode) {
    //   const text = this.graph.insertVertex(node, null, fiber.stateNode);
    //   this.graph.insertEdge(node, null, '', text, this);
    // }


    this.graph.insertVertex(node, null, `lanes: ${fiber.lanes}`, -40, 0);
    this.graph.insertVertex(node, null, `childLanes: ${fiber.childLanes}`, -40, 20);

    // 加入到graph中
    this.graph.addCell(node, parent);
  }
}

export default Fiber;