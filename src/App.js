import { useState } from "react";
import "tailwindcss/dist/tailwind.css";
import Die from "./components/Die";

function App() {
  const [scoreP1, setScoreP1] = useState(null);
  const [scoreP2, setScoreP2] = useState(null);
  return (
    <div className="container h-screen mx-auto flex place-content-around place-items-center">
      <Die onRoll={(v) => setScoreP1(v)} />
      <Die onRoll={(v) => setScoreP2(v)} />
    </div>
  );
}

export default App;
