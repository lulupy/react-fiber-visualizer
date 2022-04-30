import mx from '../mxgraph';
import getFiberShowName from './getFiberShowName';
import getFiberStyle from './getFiberStyle';

class Effects {
  constructor({ graph, parent, x = 0, y = 0, effects, fiberTree }) {
    this.layout = new mx.mxStackLayout(graph, true, 30);
    this.graph = graph;
    this.parent = parent;
    this.effects = effects;
    this.fibersMap = fiberTree.fibers; 

    this.node = graph.createVertex(null, null, '', x, y, 20, 20);
    this.layout = new mx.mxStackLayout(graph, true, 30);
    this.build();
  }
  build() {
    const { effects, parent, node } = this;
    if(effects.length > 1) {
      const fiberId = effects[0];
      let prev = this.insertEffctCell(fiberId);
      for(let i=1; i<effects.length; i++) {
        
        const fiberId = effects[i];
        const current = this.insertEffctCell(fiberId)
        this.graph.insertEdge(node, null, 'nextEffect', prev, current);
        prev = current;
      }
    } else {
      const fiberId = effects[0];
      this.insertEffctCell(fiberId);
    }

    this.layout.execute(node);

    this.graph.addCell(node, parent);
  }
  insertEffctCell(fiberId) {
    const width = 30;
    const height = 30;

    const fiber = this.fibersMap[fiberId];
    let style = '';
    let name = '';
    // fiber没有找到, 表明该fiber在另一棵树中
    if(fiber) {
      style = `fontSize=6;${getFiberStyle(fiber.tag)}`;
      name = getFiberShowName(fiber);

    } else {
      style = `fontSize=6;${getFiberStyle('unknown')}`;
      name = `${fiberId}:xxx`;
    }
    const cell = this.graph.insertVertex(this.node, null, name, 0, 0, width, height, style);
    return cell;
  }
}

export default Effects