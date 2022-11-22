import * as React from "react";
import { bargraph } from './WinLossBargraph.module.css'
import type { Colour } from '../../types/Colour'

interface Props {
    data: { wins: number, losses: number }[],
    winColour: Colour,
    lossColour: Colour,
    barHeight: number,
    spacing: number,
}

export const WinLossBarchart = ({ data, winColour, lossColour, barHeight, spacing }: Props) => {
    let curY = 0;
    const width = 100;
    const mostWinsOrLosses = data.reduce<number>((result, item) => {
        const sum = item.wins > item.losses ? item.wins : item.losses;
        return sum > result ? sum : result;
    }, 0)
    return (
        <svg className={bargraph} viewBox='0 0 100 100'>
            {data.map((el) => {
                const winBarWidth = (el.wins / mostWinsOrLosses) * (width / 2)
                const lossBarWidth = (el.losses / mostWinsOrLosses) * (width / 2)
                const y = curY;
                curY += barHeight + spacing;
                return (
                    <>
                        <rect 
                            fill={winColour} 
                            y={y} 
                            x={width / 2}
                            width={winBarWidth} 
                            height={barHeight} />
                        <text 
                            y={y + (barHeight * 0.75)} 
                            x={(width / 2) + (winBarWidth - (barHeight + 0.25))} 
                            style={{'fontSize': `${barHeight}`}}>
                            {el.wins}
                        </text>
                        <rect 
                            fill={lossColour} 
                            y={y} 
                            x={width / 2 - lossBarWidth} 
                            width={lossBarWidth} 
                            height={barHeight} />
                        <text 
                            y={y + (barHeight * 0.75)} 
                            x={(width / 2) - (lossBarWidth - 0.25)} 
                            style={{'fontSize': `${barHeight}`}}>
                            {el.losses}
                        </text>
                    </>
                )
            })}
        </svg>
    )
}
