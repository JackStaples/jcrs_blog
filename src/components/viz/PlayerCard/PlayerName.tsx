import React from "react";

export const PlayerName: React.FC<{
  playerName?: string;
}> = ({ playerName }) => {
  return (
    <>
      <path
        d="M25,50 L99.5,50 99.5,40 40,40 25,50"
        stroke="black"
        stroke-width={0.1}
        fill="white"
      />
      <text
        x={40}
        y={47}
        textLength={40}
        lengthAdjust="spacingAndGlyphs"
        fontSize={5}
        fontFamily="Georgia"
      >
        {playerName}
      </text>
    </>
  );
};
