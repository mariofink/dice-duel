import Dice from "react-dice-roll";

const Die = ({ onRoll }) => (
  <div>
    <Dice onRoll={(v) => onRoll(v)} />
  </div>
);

export default Die;
