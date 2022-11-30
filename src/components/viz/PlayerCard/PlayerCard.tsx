import React, { useState } from "react";
import { PlayerPicture } from "./PlayerPicture";
import { PlayerName } from "./PlayerName";
import { PlayerInformation } from "./PlayerInformation";
import { TeamSelect } from "../Stats/TeamSelect";
import { PlayerSelect } from "../Stats/PlayerSelect";

export const PlayerCard = () => {
  const [selectedTeamId, setSelectedTeamId] = useState(53);
  const [selectedPlayerId, setSelectedPlayerId] = useState(0);
  return (
    <>
      <div>
        <TeamSelect
          onChange={setSelectedTeamId}
          selectedTeam={selectedTeamId}
        />
        <PlayerSelect
          selectedPlayer={selectedPlayerId}
          selectedTeam={selectedTeamId}
          onChange={setSelectedPlayerId}
        />
      </div>
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
        <PlayerPicture playerId={selectedPlayerId} />
        <PlayerName playerName="Connor McDavid" />
      </svg>
    </>
  );
};
