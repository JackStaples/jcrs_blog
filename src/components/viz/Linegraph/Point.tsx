import React, { useState } from "react";

interface props {
    x: number;
    y: number;
    radius: number;
    colour: string;
    onSelect?: () => void;
    hoverColour?: string;
    selectedColour?: string;
}

export const Point: React.FC<props> = ({
    x,
    y,
    radius,
    colour,
    hoverColour,
    selectedColour,
    onSelect
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const circleProps: React.SVGProps<SVGCircleElement> = {
        cx: x,
        cy: y,
        r: radius,
        fill: isHovered || isSelected ? hoverColour : colour,
    };
    if (hoverColour) {
        circleProps.onMouseEnter = () => {
            setIsHovered(true);
        };
        circleProps.onMouseLeave = () => {
            setIsHovered(false);
        };
    }
    if (isSelected) {
        circleProps.stroke = selectedColour;
        circleProps.strokeWidth = "0.5";
    }
    if (selectedColour) {
        circleProps.onClick = () => {
            setIsSelected(!isSelected);
            if (onSelect) onSelect();
        };
    }

    return (
        <circle {...circleProps} />
    );
};
