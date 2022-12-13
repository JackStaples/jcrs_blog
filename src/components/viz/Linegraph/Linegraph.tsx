import React from "react";
import { DottedLine } from "./DottedLine";
import {
  createOffsetScale,
  createZeroToOneHundredScale,
} from "../../util/Scales";

const topOffset = 10;
const bottomOffset = 5;
const yAxisOffset = 20;
const titleScale = createZeroToOneHundredScale(0, 65);

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
  title?: string;
  yAxisTickCount?: number;
  yAxisMax?: number;
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
  title = "",
  yAxisTickCount = 6,
  yAxisMax,
}: LinegraphProps<T>) => {
  const offsetYScale = createOffsetScale(yScale, 100 - bottomOffset, topOffset);
  const yAxisTicks = createYAxisTicks(yAxisMax, yAxisTickCount, offsetYScale);

  return (
    <>
      <svg viewBox="0 0 100 100">
        <text
          textLength={titleScale(title.length)}
          lengthAdjust="spacingAndGlyphs"
          y={topOffset * 0.75}
          x={50 - titleScale(title.length) / 2}
          fontSize={topOffset * 0.75}
          fontStretch="condensed"
        >
          {title}
        </text>
        <line
          x1={yAxisOffset}
          x2={yAxisOffset}
          y1={topOffset}
          y2={100 - bottomOffset}
          stroke="black"
          strokeWidth={0.25}
        />
        {dataset.map((set, i) => {
          return (
            <DottedLine
              data={set.data}
              xValue={xValue}
              xScale={createOffsetScale(
                xScale,
                100 - bottomOffset,
                0 + yAxisOffset + 1.5
              )}
              yValue={yValue}
              yScale={offsetYScale}
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
        {yAxisTicks.map((el) => el)}
      </svg>
    </>
  );
};
function createYAxisTicks(
  yAxisMax: number | undefined,
  yAxisTickCount: number,
  offsetYScale: (value: number) => number
) {
  const yAxisTicks = [];
  if (yAxisMax) {
    const strokeWidth = 0.15;
    for (let i = 0; i <= yAxisTickCount; i++) {
      const y = offsetYScale((i / yAxisTickCount) * yAxisMax);
      const tick = (
        <line
          x1={yAxisOffset - yAxisOffset * 0.1}
          x2={100 - bottomOffset}
          y1={y - strokeWidth / 2}
          y2={y - strokeWidth / 2}
          stroke="gray"
          strokeWidth={strokeWidth}
        />
      );
      yAxisTicks.push(tick);
    }
  }
  return yAxisTicks;
}
