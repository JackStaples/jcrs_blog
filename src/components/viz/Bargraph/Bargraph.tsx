import React from "react";
import { Bar } from "./Bar";

export const Bargraph: React.FC<{
  scale: (val: number) => number,
  data: { value: number, isSelected?: boolean }[]
}> = ({
  scale,
  data,
}) => {
    console.log(scale)
    const spacer = 15 / data.length;
    const height = 90 / data.length - spacer;
    return (
      <>
        <svg viewBox="0 0 100 100">
          <line x1={0} x2={100} y1={9} y2={9} stroke="black" strokeWidth={0.2} />
          {data.map((el, i) => {
            return (
              <Bar
                key={height * i}
                x={0}
                y={(height + spacer) * i + 10 + (spacer / 2)}
                height={height}
                width={scale(el.value)}
                colour={el.isSelected ? "#2AA9D5" : "#c8c2ba"}
              />
            )
          })}
        </svg>
      </>
    );
  };
