import "./App.css";
import Dice from "./Dice";

function App() {
  return (
    <div className="App">
      <Dice numDice={2} maxVal={6} />
      <Dice numDice={2} maxVal={6} title="Side Game"/>
    </div>
  );
}

export default App;
