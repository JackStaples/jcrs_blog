import React from "react";

const offset = 10;
const offsetScale = (value: number) => {
    return ((value / 100) * (100 - offset * 2)) + offset;
};
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
            const point = (<circle cx={(offsetScale(xScale(year[xValue])))} cy={offsetScale(yScale(year[yValue]))} color="black" r={1} />)
            points.push(point);
            if (!paths[i]) {
                paths.push(`M${offsetScale(xScale(year[xValue]))} ${offsetScale(yScale(year[yValue]))}`)
            } else {
                paths[i] += ` L${offsetScale(xScale(year[xValue]))} ${offsetScale(yScale(year[yValue]))}`
            }
        }
    }

    return (
        <>
            <svg viewBox="0 0 100 100">
                {points.map(el => el)}
                {paths.map(path => {
                    return <path d={path} fillOpacity={0} stroke="black" strokeWidth={0.5} />
                })}
            </svg>
        </>
    );
};
