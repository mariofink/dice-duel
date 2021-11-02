import { useState } from "react";
import Dice from "react-dice-roll";

const DEFAULT_VALUE = 1;

const Die = ({ onRoll }) => {
  const [value, setValue] = useState(DEFAULT_VALUE);
  return (
    <div>
      <Dice
        onRoll={(v) => {
          setValue(v);
          onRoll(v);
        }}
        defaultValue={DEFAULT_VALUE}
      />
      <p className="text-center text-white text-8xl mt-12">{value}</p>
    </div>
  );
};

export default Die;
