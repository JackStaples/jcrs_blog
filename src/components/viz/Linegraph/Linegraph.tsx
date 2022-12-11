import React from "react";
import { Point } from "./Point";

const offset = 10;
const offsetScale = (value: number) => {
    return ((value / 100) * (100 - offset * 2)) + offset;
};
const createPoint = (x: number, y: number, onSelect?: () => void) => (<Point
    x={x}
    y={y}
    colour="black" radius={1.5}
    hoverColour={"Orange"}
    selectedColour={"red"}
    onSelect={onSelect}
/>)
export const Linegraph = <T extends Record<string, any>>({ dataset, xValue, xScale, yValue, yScale, onPointSelect }: {
    dataset: {
        title: string;
        data: T[];
    }[];
    xValue: keyof T;
    xScale: (val: number) => number;
    yValue: keyof T;
    yScale: (val: number) => number;
    onPointSelect: (setIndex: number, dataIndex: number) => void;
}) => {
    const points = [];
    const paths = [];
    for (let i = 0; i < dataset.length; i++) {
        const data = dataset[i].data;
        for (let j = 0; j < data.length; j++) {
            const x = offsetScale(xScale(data[j][xValue]));
            const y = offsetScale(yScale(data[j][yValue]));
            const point = createPoint(x, y, () => {
                onPointSelect(i, j)
            });
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
