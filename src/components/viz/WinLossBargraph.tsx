import * as React from "react";
import type { Colour } from '../../types/Colour'

interface Props {
    data: { wins: number, losses: number }[],
    winColour: Colour,
    lossColour: Colour,
    barHeight: number,
    width: number,
    spacing: number,
}

export const WinLossBarchart = ({ data, winColour, lossColour, barHeight, width, spacing }: Props) => {
    let curY = 0;

    const mostWinsOrLosses = data.reduce<number>((result, item) => {
        const sum = item.wins > item.losses ? item.wins : item.losses;
        return sum > result ? sum : result;
    }, 0)
    return (
        <svg width={width}>
            {data.map((el) => {
                const winBarWidth = (el.wins / mostWinsOrLosses) * (width / 2)
                const lossBarWidth = (el.losses / mostWinsOrLosses) * (width / 2)
                const y = curY;
                curY += barHeight + spacing;
                return (
                    <>
                        <rect fill={winColour} y={y} x={width / 2} width={winBarWidth} height={barHeight}></rect>
                        <foreignObject x={width / 2} y={y} width={winBarWidth} height={barHeight}>
                            <p>{el.wins}</p>
                        </foreignObject>
                        <rect fill={lossColour} y={y} x={width / 2 - lossBarWidth} width={lossBarWidth} height={barHeight}></rect>
                        <foreignObject y={y} x={width / 2 - lossBarWidth} width={lossBarWidth} height={barHeight}>
                            <p>{el.losses}</p>
                        </foreignObject>
                    </>
                )
            })}
        </svg>
    )
}
