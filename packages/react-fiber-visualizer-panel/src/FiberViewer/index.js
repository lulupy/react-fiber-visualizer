import { Button } from 'antd';
import React from 'react';
import FiberTreeGraph from 'fiber-tree-graph'


class FiberViewer extends React.PureComponent {
  componentDidMount() {
    const { snapshoot } = this.props;
    if(snapshoot) {
      this.graph = FiberTreeGraph(this.container, snapshoot);
    }
    
  }
  componentWillReceiveProps() {

  }
  componentDidUpdate() {
    const { snapshoot } = this.props;
    if(this.graph) {
      this.graph.destroy();
    }
    if(snapshoot) {
      this.graph = FiberTreeGraph(this.container, snapshoot);
    }
  }
  getXml = () => {
    // const xml = this.graph.toXml()
    // var enc = new mx.mxCodec();
    // const model = this.graph.getModel();
    // var node = enc.encode(model);
  }
  render() {
    return (
      <>
        <Button onClick={this.getXml}>get xml</Button>
        <div ref={node => this.container = node}></div>
      </>
    );

  }
}


export default FiberViewer;

