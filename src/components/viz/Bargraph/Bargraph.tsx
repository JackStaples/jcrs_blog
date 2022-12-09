import React from "react";
import { Bar } from "./Bar";

export const Bargraph: React.FC<{ data: { length: number }[] }> = ({
  data,
}) => {
  const space = 100 / data.length;
  return (
    <>
      <svg viewBox="0 0 100 100">
        {data.map((el, i) => {
          return (
            <Bar
              key={space * i}
              x={0}
              y={space * i}
              height={20}
              width={el.length}
              colour="black"
            />
          )
        })}
      </svg>
    </>
  );
};
