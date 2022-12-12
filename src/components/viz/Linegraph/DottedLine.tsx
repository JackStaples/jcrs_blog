import React from "react";
import { Point } from "./Point";

interface DottedLineProps<T> {
  data: T[];
  xValue: keyof T;
  xScale: (val: number) => number;
  yValue: keyof T;
  yScale: (val: number) => number;
  pointHoverColour?: string;
  colour?: string;
  onSelect?: (val: number) => void;
  selectedColour?: string;
}

const createPoint = (
  x: number,
  y: number,
  colour: string,
  pointHoverColour: string,
  selectedColour: string,
  onSelect?: () => void
) => (
  <Point
    x={x}
    y={y}
    colour={colour}
    radius={1.5}
    hoverColour={pointHoverColour}
    selectedColour={selectedColour}
    onSelect={onSelect}
  />
);

export const DottedLine = <T extends Record<string, any>>({
  data,
  xValue,
  xScale,
  yValue,
  yScale,
  colour = "black",
  pointHoverColour = "black",
  selectedColour = "black",
  onSelect,
}: DottedLineProps<T>) => {
  let path = "";
  const points = [];
  for (let i = 0; i < data.length; i++) {
    const x = xScale(data[i][xValue]);
    const y = yScale(data[i][yValue]);
    const point = createPoint(
      x,
      y,
      colour,
      pointHoverColour,
      selectedColour,
      () => {
        if (onSelect) onSelect(i);
      }
    );
    points.push(point);
    if (path === "") {
      path = `M${x} ${y}`;
    } else {
      path += ` L${x} ${y}`;
    }
  }

  return (
    <>
      <path d={path} fillOpacity={0} stroke={colour} strokeWidth={0.5} />
      {points.map((el) => el)}
    </>
  );
};
