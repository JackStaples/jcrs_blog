import * as React from "react";
export const WinLossBarchart = ({ data }: { data: { wins: number, losses: number }[] }) => {
    const width = 450;
    let curY = 0;
    const barHeight = 20;
    const mostWinsOrLosses = data.reduce<number>((result, item) => {
        const sum = item.wins > item.losses ? item.wins : item.losses;
        return sum > result ? sum : result;
    }, 0)
    return (
        <svg width={width}>
            {data.map((el) => {
                const winBarWidth = (el.wins / mostWinsOrLosses) * (width / 2)
                const lossBarWidth = (el.losses / mostWinsOrLosses) * (width / 2)
                const y = curY; curY += barHeight;
                return (
                    <g strokeWidth={5}>
                        <g>
                            <rect fill='green' y={y} x={width / 2} width={winBarWidth} height={20}></rect>
                            <foreignObject x={width / 2} y={y} width={winBarWidth} height={20}>
                                <p>{el.wins}</p>
                            </foreignObject>
                        </g>
                        <g>
                            <rect fill='red' y={y} x={width / 2 - lossBarWidth} width={lossBarWidth} height={barHeight}></rect>
                            <foreignObject y={y} x={width / 2 - lossBarWidth} width={lossBarWidth} height={barHeight}>
                                <p>{el.losses}</p>
                            </foreignObject>
                        </g>
                    </g>
                )
            })}
        </svg>
    )
}
