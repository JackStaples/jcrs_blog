import React from "react";

export const Linegraph = <T extends Record<string, any>>({ dataset, xValue, yValue }: {
    dataset: {
        title: string;
        data: T[];
    }[];
    xValue: keyof T;
    yValue: keyof T;
}) => {

    for (const set of dataset) {
        for (const year of set.data) {
            console.log(year[xValue]);
            console.log(year[yValue]);
        }
    }

    return (
        <>
            <svg viewBox="0 0 100 100">
            </svg>
        </>
    );
};
