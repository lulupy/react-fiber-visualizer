import { Popover } from "antd";
import classNames from "classnames";
import Effects from "./Effects";
import FiberInfo from "./FiberInfo";
import Flags from "./Flags";
import UpdateQueue from "./UpdateQueue";
import './index.css';


const getFiberShowName = (fiber) => {
  switch(fiber.tag) {
    case 'ClassComponent':
      return fiber.elementType;
    case 'HostComponent':
      return `\"${fiber.elementType}\"`;
    default:
      return fiber.tag;
  }
}

const FiberNode =  ({ x, y, fiber, workInProgress }) => {
  return (
    <g
      
      transform={`translate(${x}, ${y})`} key={fiber.id}
    >

      <Popover
        content={<FiberInfo fiber={fiber}/>}
      >
        <g className={classNames('node', { workInProgress: fiber.id === workInProgress })}>
          <circle r={35} />
          <text
            dy=".35em"
            textAnchor="middle"
          >
            {`${fiber.id}: ${getFiberShowName(fiber)}`}
          </text>
        </g>
      </Popover>
      <Flags flags={fiber.flags} />
      <Effects name="effects" effects={fiber.effects} offset={[-200, 0]}/>
      <Effects name="nextEffects" effects={fiber.nextEffects} offset={[50, 0]} background="yellow" />
      <UpdateQueue updateQueue={fiber.updateQueue} offset={[-50, 0]} />
    </g>
  );
}

export default FiberNode;
