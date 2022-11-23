import React, { useEffect, useState } from "react";
import { WinLossBarchart } from "./WinLossBargraph";

const api = 'https://statsapi.web.nhl.com/api/v1/standings';

interface TeamData {
    wins: number,
    losses: number,
    name: string,
    conference: number,
    division: number,
}

interface Response {
    teamRecords: {
        leagueRecord: {
            wins: number,
            losses: number,
            ot: number
        },
        team: { name: string }
    }[],
    division: {
        id: number,
        name: string,
    },
    conference: {
        id: number,
        name: string
    }
}
interface option { label: string, id: number };

export const NhlTeamWinLossBargraph = () => {
    const [data, setData] = useState<TeamData[]>([]);
    const [divisions, setDivisions] = useState<Set<option>>(new Set());
    const [division, setDivision] = useState(0);
    const [sort, setSort] = useState(1);

    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(results => {
                const newData: TeamData[] = []
                const newDivisions: Set<option> = new Set();
                results.records.map((el: Response) => {
                    newDivisions.add({ label: el.division.name, id: el.division.id })
                    for (const team of el.teamRecords) {
                        newData.push({
                            wins: team.leagueRecord.wins,
                            losses: team.leagueRecord.losses + team.leagueRecord.ot,
                            name: team.team.name,
                            division: el.division.id,
                            conference: el.conference.id
                        })
                    }
                })
                setData(newData);
                setDivisions(newDivisions);
            })
    }, [])
    const dataToPass: TeamData[] = [];
    for (const datum of data) {
        if (division > 0) {
            if (division === datum.division) {
                dataToPass.push(datum);
            }
        } else {
            dataToPass.push(datum);
        }

    }

    if (sort) {
        dataToPass.sort(getSorting(sort))
    }

    return (
        <>
            <div>
                <label htmlFor='order'>Order: </label>
                <select name='order' value={sort} onChange={e => setSort(parseInt(e.target.value))}>
                    <option value={1}>By Wins</option>
                    <option value={2}>By Losses</option>
                    <option value={3}>By Games Played</option>
                    <option value={4}>By Team Name</option>
                </select>
            </div>
            <div>
                <label htmlFor='division'>Division: </label>
                <select name='division' onChange={e => { setDivision(parseInt(e.target.value)) }}>
                    <option value={0}>All</option>
                    {[...divisions.values()].map(el => {
                        return (
                            <option value={el.id}>{el.label}</option>
                        )
                    })}
                </select>
            </div>
            <WinLossBarchart
                data={dataToPass}
                winColour="#005AB5"
                lossColour="#DC3220"
                barHeight={3}
                axisLinesInterval={4}
            />
        </>
    )
}

function getSorting(val: number) {
    switch (val) {
        case 1:
            return (a: TeamData, b: TeamData) => {
                return -(a.wins - b.wins);
            }
        case 2:
            return (a: TeamData, b: TeamData) => {
                return (a.wins - b.wins);
            }
        case 3:
            return (a: TeamData, b: TeamData) => {
                return -((a.wins + a.losses) - (b.wins + b.losses));
            }
        case 4:
            return (a: TeamData, b: TeamData) => {
                return a.name.localeCompare(b.name);
            }
    }
}