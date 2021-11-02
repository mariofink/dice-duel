import { useState } from "react";
import Dice from "react-dice-roll";

const DEFAULT_VALUE = 1;

const Die = ({ onRoll }) => {
  const [value, setValue] = useState(DEFAULT_VALUE);
  return (
    <div>
      <p>{value}</p>
      <Dice
        onRoll={(v) => {
          setValue(v);
          onRoll(v);
        }}
        defaultValue={DEFAULT_VALUE}
      />
    </div>
  );
};

export default Die;
