import React, { useRef, useEffect, useState } from "react";

interface props {
  x: number;
  y: number;
  height: number;
  width: number;
  colour: string;
  hoverColour?: string;
  selectedColour?: string;
}

export const Bar: React.FC<props> = ({
  x,
  y,
  height,
  width,
  colour,
  hoverColour,
  selectedColour,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const prevWidth = useRef(0);
  const rectProps: React.SVGProps<SVGRectElement> = {
    x,
    y,
    height,
    width: 0,
    fill: isHovered || isSelected ? hoverColour : colour,
  };
  if (hoverColour) {
    rectProps.onMouseEnter = () => {
      setIsHovered(true);
    };
    rectProps.onMouseLeave = () => {
      setIsHovered(false);
    };
  }
  if (isSelected) {
    rectProps.stroke = selectedColour;
    rectProps.strokeWidth = "0.5";
  }
  if (selectedColour) {
    rectProps.onClick = () => {
      setIsSelected(!isSelected);
    };
  }
  let animationRef: SVGAnimateElement;
  useEffect(() => {
    prevWidth.current = width;
    if (animationRef) {
      animationRef.beginElement();
    }
  }, [width, colour]);
  return (
    <rect {...rectProps}>
      <animate
        attributeName="width"
        from={`${prevWidth.current}`}
        to={width}
        dur="0.5s"
        fill="freeze"
        ref={(animation: SVGAnimateElement) => {
          animationRef = animation;
        }}
      />
    </rect>
  );
};
