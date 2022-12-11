import React from "react";
import { Point } from "./Points";

const offset = 10;
const offsetScale = (value: number) => {
    return ((value / 100) * (100 - offset * 2)) + offset;
};
const createPoint = (x: number, y: number) => (<Point
    x={x}
    y={y}
    colour="black" radius={1.5}
    hoverColour={"Orange"}
    selectedColour={"red"}
/>)
export const Linegraph = <T extends Record<string, any>>({ dataset, xValue, xScale, yValue, yScale }: {
    dataset: {
        title: string;
        data: T[];
    }[];
    xValue: keyof T;
    xScale: (val: number) => number;
    yValue: keyof T;
    yScale: (val: number) => number;
}) => {

    const points = [];
    const paths = [];
    for (let i = 0; i < dataset.length; i++) {
        for (const year of dataset[i].data) {
            const x = offsetScale(xScale(year[xValue]));
            const y = offsetScale(yScale(year[yValue]));
            const point = createPoint(x, y);
            points.push(point);
            if (!paths[i]) {
                paths.push(`M${x} ${y}`)
            } else {
                paths[i] += ` L${x} ${y}`
            }
        }
    }

    return (
        <>
            <svg viewBox="0 0 100 100">
                {paths.map(path => {
                    return <path d={path} fillOpacity={0} stroke="black" strokeWidth={0.5} />
                })}
                {points.map(el => el)}
            </svg>
        </>
    );
};
