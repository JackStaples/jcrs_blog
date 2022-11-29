import React, { useEffect, useState } from 'react';

export const PlayerSelect: React.FC<{ onChange: (val: number) => void, selectedPlayer: number, selectedTeam: number }> = ({ onChange, selectedPlayer, selectedTeam }) => {
    const [players, setPlayers] = useState<any[]>([]);
    useEffect(() => {
        const fetchTeams = async () => {
            const response = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${selectedTeam}?expand=team.roster`);
            const json = await response.json();
            const newPlayers = [];
            for (const player of json.teams[0].roster.roster) {
                newPlayers.push(player)
            }
            setPlayers(newPlayers);
            onChange(newPlayers[0].person.id)
        }
        fetchTeams();
    }, [selectedTeam])
    return (
        <>
            <select onChange={(event) => onChange(parseInt(event.target.value))} value={selectedPlayer}>
                {players.map(player => {
                    return (<option key={player.person.id} value={player.person.id}>{player.person.fullName}</option>)
                })}
            </select>
        </>
    )
}