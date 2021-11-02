import { useState } from 'react';
import './App.css';
import Die from "./components/Die"

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
 function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const [scoreP1, setScoreP1] = useState(null);
  const [scoreP2, setScoreP2] = useState(null);
  const rollDice = () => {
    setScoreP1(getRandomInt(1,6));
    setScoreP2(getRandomInt(1,6));
  }
  return (
    <div>
      <div>Player 1: <Die value={scoreP1}/></div>
      <div>Player 2: <Die value={scoreP2}/></div>
      <div>
        <button type="button" onClick={rollDice}>Roll!</button>
      </div>
    </div>
  );
}

export default App;
