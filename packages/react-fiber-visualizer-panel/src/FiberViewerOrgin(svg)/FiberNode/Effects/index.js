
import React from "react";

const Effects = ({ name, effects, offset, background = '#fff' }) => {
  return effects.length > 0 && (
    <g transform={`translate(${offset[0]}, ${offset[1]})`}>
      <rect
        width={effects.length * (40 + 5) + 5}
        height={60}
        stroke="blue"
        fill={background}
        x={-25}
        y={-30}

      />
      {effects.map((effect, index) => (
        <g transform={`translate(${index * (40 + 5)}, 0)`}>
          <circle r={20} stroke="#ccc" fill="#ccc" />
          <text>{effect}</text>
        </g>
      ))}
      <text
        x={-25}
        y={-30}
      >
        {name}
      </text>
    </g>
  );
}

export default Effects;