import { useState } from "react";
import Dice from "react-dice-roll";

const DEFAULT_VALUE = 1;

const Die = ({ onRoll }) => {
  const [value, setValue] = useState(DEFAULT_VALUE);
  return (
    <div onClick={() => setValue(null)}>
      <Dice
        onRoll={(v) => {
          setValue(v);
          onRoll(v);
        }}
        defaultValue={DEFAULT_VALUE}
      />
      <div className="text-center text-white text-8xl mt-12">
        <p style={{ fontFamily: "Chalkboard" }}>&nbsp;{value}&nbsp;</p>
      </div>
    </div>
  );
};

export default Die;
