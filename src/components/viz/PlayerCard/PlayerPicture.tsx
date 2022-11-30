import React from "react";

export const PlayerPicture: React.FC<{
  playerId: number;
}> = ({ playerId }) => {
  return (
    <>
      <pattern
        id="playerImage"
        height="100%"
        width="100%"
        viewBox="0 0 100 100"
      >
        <image
          href={`http://nhl.bamcontent.com/images/headshots/current/168x168/${playerId}.jpg`}
          height="50%"
          width="100%"
        />
      </pattern>
      <rect
        width={40}
        height={40}
        x={59.5}
        y={0.5}
        fill="url(#playerImage)"
        stroke="black"
        stroke-width={0.1}
      />
    </>
  );
};
