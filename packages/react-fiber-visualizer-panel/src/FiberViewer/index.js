import { Button, Modal } from 'antd';
import React from 'react';
import FiberTreeGraph from 'fiber-tree-graph'


class FiberViewer extends React.PureComponent {
  componentDidMount() {
    const { snapshoot } = this.props;
    this.graph = new FiberTreeGraph(this.container);
    if(snapshoot) {
      this.graph.show(snapshoot)
    }
    
  }

  componentDidUpdate() {
    const { snapshoot } = this.props;
    this.graph.show(snapshoot)
  }
  getXml = () => {
    const xml = this.graph.getXml()
    if(xml) {
      Modal.info({
        content: xml.outerHTML,
      })
    }
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

