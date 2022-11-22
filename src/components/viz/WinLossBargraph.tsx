import * as React from "react";
import { bargraph } from './WinLossBargraph.module.css'
import type { Colour } from '../../types/Colour'

interface Props {
    data: { wins: number, losses: number }[],
    winColour: Colour,
    lossColour: Colour,
    barHeight: number,
    axisLinesInterval: number,
}

const strokeWidth = 0.25;
const width = 100;

function getMaximumWinsOrLosses(data: { wins: number, losses: number }[]) {
    return data.reduce<number>((result, item) => {
        const sum = item.wins > item.losses ? item.wins : item.losses;
        return sum > result ? sum : result;
    }, 0);
}

function generateWinLossAxisLabels(maximum: number, increment: number): string[] {
    const retVal: string[] = [];

    for (let i = maximum; i >= 0; i -= increment) {
        retVal.push(String(i));
    }
    console.log(retVal)
    return retVal;
}

export const WinLossBarchart = ({ data, winColour, lossColour, barHeight, axisLinesInterval }: Props) => {
    const spaceBetweenBars = barHeight / 3;
    let curY = strokeWidth + barHeight + spaceBetweenBars;
    const height = (barHeight + spaceBetweenBars) * data.length + curY

    const mostWinsOrLosses = getMaximumWinsOrLosses(data);
    const axisText: string[] = generateWinLossAxisLabels(mostWinsOrLosses, axisLinesInterval);

    const numberOfAxisLines = Math.round((mostWinsOrLosses * 2) / axisLinesInterval);

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
            {Array.apply(0, Array(numberOfAxisLines + 1)).map((j, i) => {
                const x = i * (width / numberOfAxisLines);
                const num = axisText[i] ?
                    axisText[i] :
                    numberOfAxisLines % 2 === 1 ?
                        axisText[(axisText.length - 1) - (i - axisText.length)] :
                        axisText[(axisText.length - 2) - (i - axisText.length)];

                return (
                    <>
                        <text
                            y={barHeight}
                            x={x - 1}
                            style={{ fontSize: `${barHeight * 0.75}px` }}
                        >
                            {`${num}`}
                        </text>
                        <line
                            x1={x}
                            x2={x}
                            y1={barHeight}
                            y2={height}
                            stroke='black'
                            strokeWidth={strokeWidth}
                            strokeOpacity={0.25} />
                    </>
                )

            })}
            {data.map((el) => {
                const winBarWidth = (el.wins / mostWinsOrLosses) * (width / 2) - strokeWidth
                const lossBarWidth = (el.losses / mostWinsOrLosses) * (width / 2) - strokeWidth
                const y = curY;
                curY += barHeight + spaceBetweenBars;
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
