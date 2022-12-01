import React from "react";
import { TeamLogo } from "./TeamLogo";

export const PlayerInformation: React.FC<{
  height?: string;
  weight?: string;
  shoots?: string;
  number?: string;
  birthDate?: string;
  birthPlace?: string;
  teamId: number;
}> = ({ height, weight, shoots, birthDate, number, birthPlace, teamId }) => {
  const font = "Georgia";
  return (
    <>
      <rect
        width={55}
        height={45}
        x={2.5}
        y={2.5}
        fill="white"
        stroke="black"
        stroke-width={0.25}
      />
      <text
        x={7}
        y={10}
        textLength={10}
        lengthAdjust="spacingAndGlyphs"
        fontSize={5}
        fontFamily={font}
      >
        HT: {height}
      </text>
      <text
        x={20}
        y={10}
        textLength={10}
        lengthAdjust="spacingAndGlyphs"
        fontSize={5}
        fontFamily={font}
      >
        WT: {weight}
      </text>
      <text
        x={10}
        y={16.5}
        textLength={15}
        lengthAdjust="spacingAndGlyphs"
        fontSize={5}
        fontFamily={font}
      >
        Shoots: {shoots}
      </text>
      <text
        x={10}
        y={25}
        textLength={15}
        lengthAdjust="spacingAndGlyphs"
        fontSize={10}
        fontFamily={font}
      >
        #{number}
      </text>
      <text
        x={7}
        y={33}
        textLength={23}
        lengthAdjust="spacingAndGlyphs"
        fontSize={5}
        fontFamily={font}
      >
        {birthDate}
      </text>
      <text
        x={7}
        y={40}
        textLength={23}
        lengthAdjust="spacingAndGlyphs"
        fontSize={5}
        fontFamily={font}
      >
        {birthPlace}
      </text>
      <TeamLogo teamId={teamId} />
    </>
  );
};
