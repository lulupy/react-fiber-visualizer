import * as React from 'react';
import { Tooltip } from 'antd';
import classnames from 'classnames';
import './index.css';
import FiberViewer from '../FiberViewer';

const ReactFiberVisualizer = ({
  snapshoots = []
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  return (
    <div className="root">
      <div className="list">
        {snapshoots.map((record, index) => (
          <Tooltip title={record.note}>
            <span
              key={index}
              className={classnames('item', { selected: index === selectedIndex })}
              onClick={() => setSelectedIndex(index)}
            >
              {record.note[0] || '#'}
            </span>
          </Tooltip>
        ))}
      </div>
      
      <FiberViewer className="viewer" snapshoot={snapshoots[selectedIndex]}/>
    </div>
  );
}

export default ReactFiberVisualizer;

