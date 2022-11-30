import React from "react";
import { PlayerPicture } from "./PlayerPicture";
import { PlayerName } from "./PlayerName";
import { PlayerInformation } from "./PlayerInformation";

export const PlayerCard = () => {
  return (
    <>
      <svg viewBox="0 0 100 200">
        <rect
          width={99}
          height={199}
          x={0.5}
          y={0.5}
          fill="darkgray"
          stroke="black"
          stroke-width={0.5}
        />
        <PlayerInformation
          height={'6"0'}
          weight={"200"}
          shoots={"Left"}
          birthDate="January 13, 1997"
          number={"97"}
          birthPlace={"Richmond, ON"}
        />
        <PlayerPicture playerId={8478402} />
        <PlayerName playerName="Connor McDavid" />
      </svg>
    </>
  );
};
