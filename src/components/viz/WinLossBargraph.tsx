import * as React from "react";
import { bargraph } from './WinLossBargraph.module.css'
import type { Colour } from '../../types/Colour'

interface Props {
    data: { wins: number, losses: number }[],
    winColour: Colour,
    lossColour: Colour,
    barHeight: number,
    spacing: number,
    axisLines: number,
}

export const WinLossBarchart = ({ data, winColour, lossColour, barHeight, spacing, axisLines }: Props) => {
    const strokeWidth = 0.25;
    let curY = strokeWidth + barHeight;
    const width = 100;
    const height = ( barHeight + spacing ) * data.length + curY
    const mostWinsOrLosses = data.reduce<number>((result, item) => {
        const sum = item.wins > item.losses ? item.wins : item.losses;
        return sum > result ? sum : result;
    }, 0)
    const axisLinesCount = Math.round((mostWinsOrLosses * 2) / axisLines);
    const axisText: string[] = [];
    for (let i = mostWinsOrLosses; i >= 0; i-=axisLines) {
        axisText.push(String(i));
    }
    console.log(axisText)
    return (
        <svg className={bargraph} viewBox={`0 0 ${width} ${height}`}>
            <rect 
                x={0}
                y={barHeight}
                height={height - barHeight} 
                width={width} 
                stroke='black' 
                fillOpacity={0}
                strokeWidth={strokeWidth}
            />
            {Array.apply(0, Array(axisLinesCount + 1)).map((j, i) => {
                const x = i * (width/axisLinesCount);
                const num = axisText[i] ? 
                    axisText[i] :
                    axisLinesCount % 2 === 1 ?
                        axisText[(axisText.length - 1) - (i - axisText.length)] :
                        axisText[(axisText.length - 2) - (i - axisText.length)];
                
                return (
                    <>
                        <text 
                            y={barHeight} 
                            x={x - 1}
                            style={{'fontSize': `${barHeight * 0.75}`}}>
                                {`${num}`}
                        </text>
                        <line 
                            x1={x} 
                            x2={x} 
                            y1={barHeight} 
                            y2={height} 
                            stroke='black' 
                            strokeWidth={0.25}
                            strokeOpacity={0.25} />
                    </>
                )
                
            })}
            {data.map((el) => {
                const winBarWidth = (el.wins / mostWinsOrLosses) * (width / 2) - strokeWidth
                const lossBarWidth = (el.losses / mostWinsOrLosses) * (width / 2) - strokeWidth
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
                        <rect 
                            fill={lossColour} 
                            y={y} 
                            x={width / 2 - lossBarWidth} 
                            width={lossBarWidth} 
                            height={barHeight} />
                    </>
                )
            })}
        </svg>
    )
}
