import React from "react";

const SubtractButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={() => {
        onClick();
      }}
    >
      -
    </button>
  );
};

export default SubtractButton;
