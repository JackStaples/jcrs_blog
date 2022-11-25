import React from "react";
import StandardAxisSVG from "../../blocks/StandardAxisSVG";

const SortingBase = () => {
  return (
    <>
      <StandardAxisSVG width={100} height={100}>
        <rect
          x={25}
          y={25}
          width={5}
          height={5}
          stroke="black"
          fill="black"
          fillOpacity={0}
          stroke-width={0.25}
        >
          <animateMotion
            dur="2s"
            repeatCount="1"
            path={"M 0,0 5,5 10,10 5,5 0,0 z"}
            begin="click"
          />
        </rect>
      </StandardAxisSVG>
    </>
  );
};

export default SortingBase;
