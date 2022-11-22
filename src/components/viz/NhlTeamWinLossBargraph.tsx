import React, { useEffect, useState } from "react";
import { WinLossBarchart } from "./WinLossBargraph";

const api = 'https://statsapi.web.nhl.com/api/v1/standings';

interface TeamData {
    wins: number,
    losses: number,
    name: string,
}

interface Response {
    teamRecords: {
        leagueRecord: {
            wins: number,
            losses: number,
            ot: number
        },
        team: { name: string }
    }[]
}

export const NhlTeamWinLossBargraph = () => {
    const [data, setData] = useState<TeamData[]>([]);
    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(results => {
                const newData: TeamData[] = []
                results.records.map((el: Response) => {
                    for (const team of el.teamRecords) {
                        newData.push({
                            wins: team.leagueRecord.wins,
                            losses: team.leagueRecord.losses + team.leagueRecord.ot,
                            name: team.team.name
                        })
                    }
                })
                setData(newData);
            })
    }, [])
    return (
        <WinLossBarchart
            data={data}
            winColour="#005AB5"
            lossColour="#DC3220"
            barHeight={3}
            axisLinesInterval={5}
        />
    )
}