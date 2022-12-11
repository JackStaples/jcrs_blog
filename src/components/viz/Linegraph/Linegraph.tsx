import React from "react";
import { Point } from "./Point";
import { DottedLine } from "./DottedLine";

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

interface LinegraphProps<T> {
    dataset: {
        title: string;
        data: T[];
    }[];
    xValue: keyof T;
    xScale: (val: number) => number;
    yValue: keyof T;
    yScale: (val: number) => number;
    onPointSelect: (setIndex: number, dataIndex: number) => void;
    colourGenerator?: (index: number) => string;
}

export const Linegraph = <T extends Record<string, any>>({ dataset, xValue, xScale, yValue, yScale, onPointSelect }: LinegraphProps<T>) => {
    return (
        <>
            <svg viewBox="0 0 100 100">
                {
                    dataset.map((set, i) => {
                        return <DottedLine
                            data={set.data}
                            xValue={xValue}
                            xScale={(val: number) => {
                                return offsetScale(xScale(val));
                            }}
                            yValue={yValue}
                            yScale={(val: number) => {
                                return offsetScale(yScale(val));
                            }}
                            colour="black"
                            onSelect={
                                (j: number) => {
                                    onPointSelect(i, j);
                                }
                            }
                        />
                    })
                }
            </svg>
        </>
    );
};
