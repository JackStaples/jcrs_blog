import React from "react";
import AddButton from "../../blocks/buttons/AddButton";
import SubtractButton from "../../blocks/buttons/SubtractButton";

const AddAndSubtractButton: React.FC<{
  onClick: (value: number) => void;
  value: number;
}> = ({ onClick, value }) => {
  return (
    <>
      <AddButton
        onClick={() => {
          onClick(value + 1);
        }}
      />
      <SubtractButton
        onClick={() => {
          onClick(value - 1);
        }}
      />
    </>
  );
};

export default AddAndSubtractButton;
