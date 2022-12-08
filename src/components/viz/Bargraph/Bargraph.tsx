import React from "react";

export const Bargraph: React.FC<{ data: { length: number }[] }> = ({
  data,
}) => {
  const space = 100 / data.length;
  return (
    <>
      <svg viewBox="0 0 100 100">
        {data.map((el, i) => {
          return (
            <rect
              x={0}
              y={space * i}
              height={20}
              width={el.length}
              fill="black"
            ></rect>
          );
        })}
      </svg>
      ;
    </>
  );
};
