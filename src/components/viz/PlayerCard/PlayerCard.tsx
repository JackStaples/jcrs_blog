import React, { useState } from "react";
import { PlayerPicture } from "./PlayerPicture";
import { PlayerName } from "./PlayerName";
import { PlayerInformation } from "./PlayerInformation";
import { TeamSelect } from "../Stats/TeamSelect";
import { PlayerSelect } from "../Stats/PlayerSelect";
import type { Person } from "../Stats/Player";

export const PlayerCard = () => {
  const [selectedTeamId, setSelectedTeamId] = useState(53);
  const [selectedPlayerId, setSelectedPlayerId] = useState(0);
  const [selectedPerson, setSelectedPerson] = useState<Person>();
  const handlePlayerChange = async (id: number) => {
    const response = await fetch(
      `https://statsapi.web.nhl.com/api/v1/people/${id}`
    );
    const json = await response.json();
    console.log(json);
    const person = json.people[0];
    setSelectedPerson({
      id: person.id,
      fullName: person.fullName,
      link: person.link,
      primaryNumber: person.primaryNumber,
      birthDate: person.birthDate,
      birthCity: person.birthCity,
      birthState: person.birthStateProvince,
      birthCountry: person.birthCountry,
      height: person.height,
      weight: person.weight,
      shootsCatches: person.shootsCatches,
    });
    setSelectedPlayerId(id);
  };
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
          onChange={handlePlayerChange}
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
          height={selectedPerson?.height}
          weight={selectedPerson?.weight}
          shoots={selectedPerson?.shootsCatches}
          birthDate={selectedPerson?.birthDate}
          number={selectedPerson?.primaryNumber}
          birthPlace={`${selectedPerson?.birthCity}, ${selectedPerson?.birthCountry}`}
          teamId={selectedTeamId}
        />
        <PlayerPicture playerId={selectedPlayerId} />
        <PlayerName playerName={selectedPerson?.fullName} />
      </svg>
    </>
  );
};
