import * as React from "react";
import { bargraph } from './WinLossBargraph.module.css'
import type { Colour } from '../../types/Colour'

interface Props {
    data: { wins: number, losses: number, name: string }[],
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
    let i = retVal.length - 1;
    if (maximum % 2 === 0) {
        i -= 1;
    }
    for (; i >= 0; i--) {
        retVal.push(retVal[i]);
    }

    return retVal;
}

export const WinLossBarchart = ({ data, winColour, lossColour, barHeight, axisLinesInterval }: Props) => {
    if (data.length === 0) return (<></>);
    const spaceBetweenBars = barHeight / 3;
    let curY = strokeWidth + barHeight + spaceBetweenBars;
    const height = (barHeight + spaceBetweenBars) * data.length + curY;
    const graphWidth = width - barHeight;
    const sideBuffer = barHeight / 2;

    const mostWinsOrLosses = getMaximumWinsOrLosses(data);
    const axisText: string[] = generateWinLossAxisLabels(mostWinsOrLosses, axisLinesInterval);

    const numberOfAxisLines = axisText.length;

    return (
        <svg className={bargraph} viewBox={`0 0 ${width} ${height}`}>
            {createEnclosingBox(sideBuffer, barHeight, height, graphWidth)}
            {createAxisLines(numberOfAxisLines, graphWidth, sideBuffer, axisText, barHeight, height)}
            {data.map((el) => {
                const winBarWidth = (el.wins / mostWinsOrLosses) * (graphWidth / 2) - strokeWidth
                const lossBarWidth = (el.losses / mostWinsOrLosses) * (graphWidth / 2) - strokeWidth
                const y = curY;
                curY += barHeight + spaceBetweenBars;
                return (
                    <>
                        <rect
                            fill={winColour}
                            y={y}
                            x={graphWidth / 2 + sideBuffer}
                            width={winBarWidth}
                            height={barHeight} />
                        <rect
                            fill={lossColour}
                            y={y}
                            x={graphWidth / 2 - lossBarWidth + sideBuffer}
                            width={lossBarWidth}
                            height={barHeight} />
                        <text
                            fill={'yellow'}
                            y={y + (barHeight * 0.75)}
                            x={(graphWidth / 2 + sideBuffer) - ((el.name.length / 2))}
                            style={{ fontSize: `${barHeight * 0.6}px` }}
                        >
                            {el.name}
                        </text>
                    </>
                )
            })}
        </svg>
    )
}
function createEnclosingBox(sideBuffer: number, barHeight: number, height: number, graphWidth: number) {
    return <rect
        x={0 + sideBuffer}
        y={barHeight}
        height={height - barHeight}
        width={graphWidth}
        stroke='black'
        fillOpacity={0}
        strokeWidth={strokeWidth} />;
}

function createAxisLines(count: number, width: number, sideBuffer: number, axisText: string[], barHeight: number, height: number): React.ReactNode {
    const spaceBetween = width / (count - 1);
    return Array.apply(0, Array(count)).map((j, i) => {
        const x = i * spaceBetween + sideBuffer;
        return (
            <>
                <text
                    y={barHeight}
                    x={x - ((barHeight * axisText[i].length) / (barHeight * 2))}
                    style={{ fontSize: `${barHeight * 0.75}px` }}
                >
                    {`${axisText[i]}`}
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
        );

    });
}

