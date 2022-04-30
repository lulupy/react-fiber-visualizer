import  React from 'react';
import './index.css';

import SingleFiberTree from './SingleFiberTree';


class FiberViewer extends React.Component {
  state = {
    width: 600,
    height: 600,
  };
  container = React.createRef();
  componentDidMount() {
    this.setState({
      width: this.container.current.clientWidth,
      height: this.container.current.clientHeight,
    });
  }
  render() {
    const { width, height } = this.state;
    const margin = {top: 40, right: 90, bottom: 50, left: 90};
    const innerWidth = width - margin.left - margin.right;
    const innerHeith = height - margin.top - margin.bottom;

    const { snapshoot } = this.props;


    const { className } = this.props;

    return (
      <div className={className} ref={this.container}>
        {snapshoot && (
          <svg width={width} height={height}>
            <SingleFiberTree
              fiberTree={snapshoot.alternateTree}
              workInProgress={snapshoot.workInProgress}
              height={innerHeith}
              width={innerWidth/2}
              x={margin.left}
              y={margin.top}
            />
            <SingleFiberTree
              fiberTree={snapshoot.currentTree}
              workInProgress={snapshoot.workInProgress}
              height={innerHeith}
              width={innerWidth/2}
              x={margin.left + innerWidth / 2}
              y={margin.top}
            />
          </svg>
        )}
      </div>
    );
  }
}

export default FiberViewer;