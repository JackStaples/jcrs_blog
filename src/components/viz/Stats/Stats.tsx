import React, { useState } from 'react';
import { Headshot } from './Headshot';
import { TeamSelect } from './TeamSelect';
import { PlayerSelect } from './PlayerSelect';

export const Stats = () => {
    const [selectedTeam, setSelectedTeam] = useState(53);
    const [selectedPlayer, setSelectedPlayer] = useState(0);
    return (
        <>
            <TeamSelect onChange={(val) => { setSelectedTeam(val) }} selectedTeam={selectedTeam} />
            <PlayerSelect onChange={setSelectedPlayer} selectedTeam={selectedTeam} selectedPlayer={selectedPlayer} />
            <svg viewBox='0 0 100 100'>
                <Headshot playerId={selectedPlayer} x={50} y={15} radius={10} />
            </svg>
        </>
    )
}