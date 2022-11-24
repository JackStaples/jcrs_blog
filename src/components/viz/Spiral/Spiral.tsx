import React, { useState } from "react";
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
      <div>
        <div>
          <input
            type="range"
            min="0"
            max="100"
            value={a}
            onChange={(e) => setA(parseInt(e.target.value))}
          />
          {a}
          <button
            onClick={() => {
              setA(a + 1);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              setA(a - 1);
            }}
          >
            -
          </button>
        </div>
        <div>
          <input
            type="range"
            min="0"
            max="25"
            value={b}
            onChange={(e) => setB(parseInt(e.target.value))}
          />
          {b}
          <button
            onClick={() => {
              setB(b + 1);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              setB(b - 1);
            }}
          >
            -
          </button>
        </div>
      </div>
      <svg viewBox={`0 0 ${size} ${size}`}>
        <polyline
          fill="none"
          stroke="black"
          points={points.reduce((a, b) => {
            return `${b.x},${b.y} ${a}`;
          }, "")}
        />
      </svg>
    </>
  );
};
