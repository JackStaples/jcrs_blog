import React, { useState } from "react";
import RangeWithButtons from "../../blocks/buttons/RangeWithButtons";
import StandardAxisSVG from "../../blocks/StandardAxisSVG";
import { control, controls, equation } from './Spiral.module.css';
import type { Coordinates } from "../../../types/Coordinates";

const generateCoordinates = (
  a: number,
  b: number,
  count: number,
  offset: number
): Coordinates => {
  const coordinates: Coordinates = [];

  for (let i = 0; i <= count; i++) {
    const angle = i * 0.1;
    coordinates.push({
      x: offset + (a + b * angle) * Math.cos(angle),
      y: offset + (a + b * angle) * Math.sin(angle),
    });
  }

  return coordinates;
};

export const Spiral = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(5);
  const size = 500;
  const points = generateCoordinates(a, b, size, size / 2);
  return (
    <>
      <div className={equation}>r = {a} + {b} * θ</div>
      <div className={controls}>
        <div className={control}>
          <RangeWithButtons onClick={setA} value={a} min={0} max={100} />
        </div>
        <div className={control}>
          <RangeWithButtons onClick={setB} value={b} min={0} max={25} />
        </div>
      </div>
      <StandardAxisSVG height={size} width={size}>
        <line
          x1={500}
          x2={0}
          y1={250}
          y2={250}
          stroke="black"
          strokeOpacity={0.15}
        />
        <line
          x1={250}
          x2={250}
          y1={500}
          y2={0}
          stroke="black"
          strokeOpacity={0.15}
        />
        <polyline
          fill="none"
          stroke="black"
          points={points.reduce((a, b) => {
            return `${b.x},${b.y} ${a}`;
          }, "")}
        />
      </StandardAxisSVG>
    </>
  );
};
