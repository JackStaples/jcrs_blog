import React from "react";
import { Bar } from "./Bar";

export const Bargraph: React.FC<{ data: { length: number, isSelected: boolean }[] }> = ({
  data,
}) => {
  const spacer = 15 / data.length;
  const height = 90 / data.length - spacer;
  return (
    <>
      <svg viewBox="0 0 100 100">
        {data.map((el, i) => {
          return (
            <Bar
              key={height * i}
              x={0}
              y={(height + spacer) * i + 10}
              height={height}
              width={el.length}
              colour={el.isSelected ? "blue" : "gray"}
            />
          )
        })}
      </svg>
    </>
  );
};
