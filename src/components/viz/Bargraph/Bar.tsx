import React, { useRef, useEffect } from "react";

interface props {
    x: number,
    y: number,
    height: number,
    width: number,
    colour: string
}

export const Bar: React.FC<props> = ({ x, y, height, width, colour }) => {
    const prevWidth = useRef(0)
    let animationRef: SVGAnimateElement;
    useEffect(() => {
        console.info(width)
        prevWidth.current = width;
        if (animationRef) {
            animationRef.beginElement();
        }
    }, [width, colour])
    return <rect
        x={x}
        y={y}
        height={height}
        width={0}
        fill={`${colour}`}
    >
        <animate attributeName="width" from={`${prevWidth.current}`} to={width} dur="0.5s" fill="freeze" ref={(animation: SVGAnimateElement) => { animationRef = animation }} />
    </rect>
}