import React from "react";

const AddButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={() => {
        onClick();
      }}
    >
      +
    </button>
  );
};

export default AddButton;
