import React from 'react';
import { Headshot } from './Headshot';
import { TeamLogo } from './TeamLogo';

export const CardHeader: React.FC<{ selectedPlayer: number, selectedTeam: number }> = ({ selectedPlayer, selectedTeam }) => {
    return (
        <>
            <div>
                <TeamLogo teamId={selectedTeam} height={100} width={100} />
            </div>
            <Headshot playerId={selectedPlayer} height={150} width={150} />
        </>
    )
}