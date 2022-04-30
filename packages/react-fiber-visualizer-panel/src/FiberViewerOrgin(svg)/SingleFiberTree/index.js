import  React from 'react';
import * as d3 from 'd3';
import FiberNode from '../FiberNode';

function addSibling (root) {
  if(root.children) {
    const children = root.children;
    addSibling(children[0]);
    for(let i=1; i<children.length; i++) {
      children[i-1].sibling = children[i];
      addSibling(children[i]);
    }
  }
}

const SingleFiberTree = ({ fiberTree, width, height, x, y, workInProgress }) => {
  console.log(width, height, x, y)
  const { tree, data: { fibers } } = fiberTree;
  const treemap = d3.tree().size([width, height]);
  let nodes = d3.hierarchy(tree);
  nodes = treemap(nodes);
  addSibling(nodes);
  const arrayOfNodes = nodes.descendants();
  return (
    <g className='root' transform={`translate(${x}, ${y})`}>
              
      {/* child links */}
      {arrayOfNodes.slice(1).map(d => (
        <path
          className='link'
          d={`M ${d.x},${d.y} ${d.parent.x},${d.parent.y}`}
          transform="translate(5, 0)"
        />
      ))}
      {/* return links */}
      {arrayOfNodes.slice(1).map(d => (
        <path
          className='link'
          d={`M ${d.x},${d.y} ${d.parent.x},${d.parent.y}`}
          transform="translate(-5, 0)"
        />
      ))}
      {/* sibling links */}
      {arrayOfNodes
      .slice(1)
      .filter(d => d.sibling)
      .map(d => (
        <path
          className='link'
          d={`M ${d.x},${d.y} ${d.sibling.x},${d.sibling.y}`}
        />
      ))}

      {arrayOfNodes.map(d => (
        <FiberNode x={d.x} y={d.y} fiber={fibers[d.data.id]} workInProgress={workInProgress} />
      ))}
    </g>
  );
}

export default SingleFiberTree;
