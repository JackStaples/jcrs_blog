import React, { useEffect, useState } from 'react';

export const TeamSelect: React.FC<{ onChange: (val: number) => void, selectedTeam: number }> = ({ onChange, selectedTeam }) => {
    const [teams, setTeams] = useState<any[]>([]);
    useEffect(() => {
        const fetchTeams = async () => {
            const response = await fetch('https://statsapi.web.nhl.com/api/v1/teams');
            const json = await response.json();
            const newTeams = [];
            for (const team of json.teams) {
                newTeams.push(team)
            }
            setTeams(newTeams);
        }
        fetchTeams();
    }, [])
    return (
        <>
            <select onChange={(event) => onChange(parseInt(event.target.value))} value={selectedTeam}>
                {teams.map(team => {
                    return (<option key={team.id} value={team.id}>{team.name}</option>)
                })}
            </select>
        </>
    )
}