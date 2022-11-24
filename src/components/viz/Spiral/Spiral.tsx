import React from 'react';

interface point { x: number, y: number };

const a = 1.5;
const b = 4;

export const Spiral = () => {
    const size = 500;
    const points: point[] = [];
    const offset = size / 2;
    for (let i = 0; i <= 400; i++) {
        const angle = i * 0.1;
        points.push({
            x: offset + (a + b * angle) * Math.cos(angle),
            y: offset + (a + b * angle) * Math.sin(angle)
        })
    }
    return (
        <svg viewBox={`0 0 ${size} ${size}`}>
            <polyline fill="none" stroke="black" points={points.reduce((a, b) => {
                return `${b.x},${b.y} ${a}`;
            }, '')} />
        </svg>
    )
}