import React, { useRef, useEffect, useState } from "react";

interface props {
    x: number,
    y: number,
    height: number,
    width: number,
    colour: string
    hoverColour?: string,
}

export const Bar: React.FC<props> = ({ x, y, height, width, colour, hoverColour }) => {
    const [isHovered, setIsHovered] = useState(false);
    const prevWidth = useRef(0)
    const rectProps = {
        x,
        y,
        height,
        width: 0,
        fill: colour,
    }
    if (hoverColour) {

    }
    let animationRef: SVGAnimateElement;
    useEffect(() => {
        prevWidth.current = width;
        if (animationRef) {
            animationRef.beginElement();
        }
    }, [width, colour])
    return <rect
        {...rectProps}
    >
        <animate attributeName="width" from={`${prevWidth.current}`} to={width} dur="0.5s" fill="freeze" ref={(animation: SVGAnimateElement) => { animationRef = animation }} />
    </rect>
}