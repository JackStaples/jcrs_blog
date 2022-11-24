import React, { ReactNode } from "react";

const StandardAxisSVG: React.FC<{
  height: number;
  width: number;
  children: ReactNode[] | ReactNode;
}> = ({ height, width, children }) => {
  return (
    <svg viewBox={`0 0 ${width} ${height}`}>
      <g transform={`translate(0,${height})`}>
        <g transform="scale(1,-1)">{children}</g>
      </g>
    </svg>
  );
};

export default StandardAxisSVG;
