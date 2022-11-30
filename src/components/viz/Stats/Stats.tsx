import React, { useState } from 'react';
import { Headshot } from './Headshot';
import { TeamSelect } from './TeamSelect';
import { PlayerSelect } from './PlayerSelect';
import { CardHeader } from './CardHeader';

export const Stats = () => {
    const [selectedTeam, setSelectedTeam] = useState(53);
    const [selectedPlayer, setSelectedPlayer] = useState(0);
    return (
        <>
            <TeamSelect onChange={(val) => { setSelectedTeam(val) }} selectedTeam={selectedTeam} />
            <PlayerSelect onChange={setSelectedPlayer} selectedTeam={selectedTeam} selectedPlayer={selectedPlayer} />
            <CardHeader selectedPlayer={selectedPlayer} selectedTeam={selectedTeam} />
        </>
    )
}