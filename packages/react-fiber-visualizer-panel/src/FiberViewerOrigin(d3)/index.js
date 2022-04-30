import React from 'react';
import * as d3 from 'd3';
import './index.css';

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


function createView(data, container) {
  const width = container.clientWidth;
  const height = container.clientHeight;

  const margin = {top: 40, right: 90, bottom: 50, left: 90};
  const innerWidth = width - margin.left - margin.right;
  const innerHeith = height - margin.top - margin.bottom;

  if(!data) return;
  const { tree } = data.alternateTree;
  const treemap = d3.tree().size([innerWidth, innerHeith]);
  let nodes = d3.hierarchy(tree);
  nodes = treemap(nodes);
  addSibling(nodes);

  const svg = d3.select(container).select("svg")
    .attr("width", width)
    .attr("height", height);
  
  svg.select('.root').remove();
  const g = svg.append("g")
    .attr('class', 'root')
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  g.selectAll(".return-link")
    .data( nodes.descendants().slice(1))
    .enter().append("path")
      .attr("class", "link")
      .attr("d", function(d) {
        return "M" + d.x + "," + d.y
          + " " + d.parent.x + "," + d.parent.y;
        })
      .attr('transform', `translate(5, 0)`);

  g.selectAll(".child-link")
    .data( nodes.descendants().slice(1))
    .enter().append("path")
      .attr("class", "link")
      .attr("d", function(d) {
        return "M" + d.x + "," + d.y
          + " " + d.parent.x + "," + d.parent.y;
        })
      .attr('transform', `translate(-5, 0)`);

  g.selectAll(".child-link")
    .data( nodes.descendants().slice(1))
    .enter()
    .filter(d => d.sibling)
    .append("path")
      .attr("class", "link")
      .attr("d", function(d) {
        return "M" + d.x + "," + d.y
          + " " + d.sibling.x + "," + d.sibling.y;
        })
      .attr('transform', `translate(-5, 0)`);

  const node = g.selectAll(".node")
    .data(nodes.descendants())
    .enter().append("g")
    .attr("class", function(d) { 
      return "node" + 
        (d.children ? " node--internal" : " node--leaf"); })
    .attr("transform", function(d) { 
      return "translate(" + d.x + "," + d.y + ")"; });
  
  node.append("circle")
    .attr("r", 10);

  node.append("text")
    .attr("dy", ".35em")
    .attr("y", function(d) { return d.children ? -20 : 20; })
    .style("text-anchor", "middle")
    .text(function(d) { return d.data.id; });

}

class FiberViewer extends React.PureComponent {
  componentDidMount() {
    console.log('componentDidMount', this.props.data);
    d3.select(this.container).append("svg");
    createView(this.props.data, this.container);
  }
  componentDidUpdate() {
    console.log('componentDidUpdate', this.props.data);
    createView(this.props.data, this.container);
  }
  render() {
    const { className } = this.props;
    return (
      <div
        className={className}
        ref={node => this.container = node}
      />
    );
  }
}

export default FiberViewer;