import mx from '../mxgraph';
import { FLAG_COLOR } from './constants';

class Flags {
  constructor({ graph, parent, x = 0, y = 0, flags }) {
    this.graph = graph;
    this.parent = parent;
    this.flags = flags;
    this.node = graph.createVertex(null, null, '', x, y, 20, 20);
    this.layout = new mx.mxStackLayout(graph, false, 0);
    this.build();
  }

  build() {
    const width = 120;
    const height = 15;
    const { node, graph, parent, flags, layout } = this;
    flags.forEach(flag => {
      const fillColor = FLAG_COLOR[flag] || FLAG_COLOR.default;
      const style = `rounded=1;align=left;fillColor=${fillColor};strokeColor=#36393d;fontSize=12;points=[];`;
      graph.insertVertex(node, null, flag, 0, 0, width, height, style);
    })

    layout.execute(node);
    graph.addCell(parent);
  }
}

export default Flags;