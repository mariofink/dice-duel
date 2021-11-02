import { useState } from "react";
import Dice from "react-dice-roll";

const DEFAULT_VALUE = 1;

const Die = ({ onRoll }) => {
  const [value, setValue] = useState(DEFAULT_VALUE);
  return (
    // warning, there is an empty character hiding here!
    <div onClick={() => setValue("‎")}>
      <Dice
        onRoll={(v) => {
          setValue(v);
          onRoll(v);
        }}
        size={150}
        defaultValue={DEFAULT_VALUE}
      />
      <div className="text-center text-white text-8xl mt-12">
        <p style={{ fontFamily: "Chalkboard" }}>{value}</p>
      </div>
    </div>
  );
};

export default Die;
