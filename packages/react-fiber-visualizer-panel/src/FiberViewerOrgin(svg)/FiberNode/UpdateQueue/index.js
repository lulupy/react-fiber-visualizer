const UpdateQueue = ({ offset, updateQueue }) => {
  if(!updateQueue) return null;

  const {
    baseState,
    _baseUpdateQueue,
  } = updateQueue;

  return (
    <g transform={`translate(${offset[0]}, ${offset[1]})`}>
      <g>
        {updateQueue?.shared?.pending.map((update, index) => (
          <g transform={`translate(${index * (20 + 5)}, 0)`}>
            <circle r="10"></circle>
          </g>
        ))}
      </g>
      <g transform={`translate(0, 20)`}>
        {_baseUpdateQueue.map((update, index) => (
          <g transform={`translate(${index * (20 + 5)}, 0)`}>
            <circle r="10" fill="red"></circle>
          </g>
        ))}
      </g>
    </g>
  );
}

export default UpdateQueue;