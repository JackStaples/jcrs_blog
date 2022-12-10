import React from "react";
import { Bar } from "./Bar";

const offset = 1;
const offsetScale = (value: number) => {
  return (value / 100) * (100 - offset * 2);
};

export const Bargraph: React.FC<{
  title: string,
  scale: (val: number) => number;
  data: { title: string; value: number; isSelected?: boolean }[];
}> = ({ title, scale, data }) => {
  const spacer = 15 / data.length;
  const height = 90 / data.length - spacer;
  return (
    <>
      <svg viewBox="0 0 100 100">
        <text x="10%" y={7} fontSize={7} textLength={80} lengthAdjust={"spacingAndGlyphs"}>{title}</text>
        <line
          x1={offset}
          x2={100 - offset}
          y1={10}
          y2={10}
          stroke="black"
          strokeWidth={0.2}
        />
        {data.map((el, i) => {
          return (
            <Bar
              key={el.title}
              x={offset}
              y={(height + spacer) * i + 10 + spacer / 2}
              height={height}
              width={offsetScale(scale(el.value))}
              colour={"#c8c2ba"}
              hoverColour={"#2AA9D5"}
              selectedColour={"black"}
            />
          );
        })}
      </svg>
    </>
  );
};
