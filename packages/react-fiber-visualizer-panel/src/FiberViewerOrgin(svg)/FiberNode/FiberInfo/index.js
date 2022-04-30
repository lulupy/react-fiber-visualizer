import { List } from 'antd';
const FiberInfo = ({ fiber }) => {
  return (
    <List
      size="small"
      bordered
    >
      <List.Item>id: {fiber.id}</List.Item>
      <List.Item>tag: {fiber.tag}</List.Item>
      <List.Item>elementType: {fiber.elementType}</List.Item>
      <List.Item>
        stateNode: 
          {fiber.tag === 'ClassComponent' ? JSON.stringify(fiber.stateNode, null, 2) : fiber.stateNode}
      </List.Item>
      <List.Item>
        updateQueue:
        <pre>{JSON.stringify(fiber.updateQueue, null, 2)}</pre>
      </List.Item>
    </List>
  );
}

export default FiberInfo;