import React from "react";
import { DottedLine } from "./DottedLine";
import { createOffsetScale } from "../../util/Scales";

const offset = 10;

interface LinegraphProps<T> {
  dataset: {
    title: string;
    data: T[];
  }[];
  xValue: keyof T;
  xScale: (val: number) => number;
  yValue: keyof T;
  yScale: (val: number) => number;
  onPointSelect?: (setIndex: number, dataIndex: number) => void;
  colourGenerator?: (index: number) => string;
  hoverColourGenerator?: (index: number) => string;
  selectColourGenerator?: (index: number) => string;
}

export const Linegraph = <T extends Record<string, any>>({
  dataset,
  xValue,
  xScale,
  yValue,
  yScale,
  onPointSelect,
  colourGenerator,
  hoverColourGenerator,
  selectColourGenerator,
}: LinegraphProps<T>) => {
  return (
    <>
      <svg viewBox="0 0 100 100">
        <text y={10}>This is an Example Title That's Pretty Long</text>
        {dataset.map((set, i) => {
          return (
            <DottedLine
              data={set.data}
              xValue={xValue}
              xScale={xScale}
              yValue={yValue}
              yScale={createOffsetScale(yScale, 100, offset)}
              colour={colourGenerator ? colourGenerator(i) : "black"}
              onSelect={(j: number) => {
                if (onPointSelect) onPointSelect(i, j);
              }}
              pointHoverColour={
                hoverColourGenerator ? hoverColourGenerator(i) : "black"
              }
              selectedColour={
                selectColourGenerator ? selectColourGenerator(i) : "black"
              }
            />
          );
        })}
      </svg>
    </>
  );
};
