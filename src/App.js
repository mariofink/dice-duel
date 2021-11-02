import { useState } from "react";
import "./App.css";
import Die from "./components/Die";

function App() {
  const [scoreP1, setScoreP1] = useState(null);
  const [scoreP2, setScoreP2] = useState(null);
  return (
    <div className="App">
      <div style={{ marginBottom: "5rem" }}>
        <Die onRoll={(v) => setScoreP1(v)} />
      </div>
      <div style={{ marginBottom: "5rem" }}>
        <Die onRoll={(v) => setScoreP2(v)} />
      </div>
      <div>{scoreP1}</div>
      <div>{scoreP2}</div>
    </div>
  );
}

export default App;
