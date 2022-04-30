import ReactFiberVisualizer from "./ReactFiberVisualizer"
import snapshoots from './snapshoots';

const App =  () => {
  return <ReactFiberVisualizer snapshoots={snapshoots} />
}

export default App;
