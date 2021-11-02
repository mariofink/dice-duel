import { useState } from "react";
import "./App.css";
import Die from "./components/Die";

function App() {
  const [scoreP1, setScoreP1] = useState(null);
  const [scoreP2, setScoreP2] = useState(null);
  return (
    <div className="App">
      <div>
        <Die onRoll={(v) => setScoreP1(v)} />
      </div>
      <div>
        <Die onRoll={(v) => setScoreP2(v)} />
      </div>
    </div>
  );
}

export default App;
