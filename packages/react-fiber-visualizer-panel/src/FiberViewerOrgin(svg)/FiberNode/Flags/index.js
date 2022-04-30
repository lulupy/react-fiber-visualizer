const Flags = ({ flags }) => {
  const rectWidth = 130;
  const rectHeight = 15;
  return (
    <g transform={`translate(100, ${-flags.length * (rectHeight + 5) / 2})`}>
      {flags.map((flag, index) => (
        <g transform={`translate(0, ${index * (rectHeight + 5)})`}>
          <rect
            width={rectWidth}
            height={rectHeight}
            fill="#ccc"
          />
          <text
            y={12}
            fontSize={12}
            textAnchor="start"
          >
            {flag}
          </text>
        </g>
      ))}
    </g>
  );
}

export default Flags;