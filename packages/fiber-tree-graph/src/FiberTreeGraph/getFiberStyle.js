import { FIBER_COLOR } from './constants';

function getFiberStyle (fiberTag) {
  const fillColor =  FIBER_COLOR[fiberTag] || FIBER_COLOR.default;
  return `shape=ellipse;fillColor=${fillColor};strokeColor=#666666;`;

}

export default getFiberStyle;