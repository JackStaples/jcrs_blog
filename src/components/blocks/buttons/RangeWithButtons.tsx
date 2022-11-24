import React from "react";
import AddAndSubtractButton from "./AddAndSubractButtons";

const RangeWithButtons: React.FC<{
  onClick: (value: number) => void;
  min: number;
  max: number;
  value: number;
}> = ({ onClick, min, max, value }) => {
  const withInRange = (newValue: number) => {
    if (min <= newValue && newValue <= max) {
      onClick(newValue);
    }
  };
  return (
    <>
      <input
        type="range"
        min={`${min}`}
        max={`${max}`}
        value={value}
        onChange={(e) => withInRange(parseInt(e.target.value))}
      />
      <AddAndSubtractButton onClick={withInRange} value={value} />
    </>
  );
};

export default RangeWithButtons;
