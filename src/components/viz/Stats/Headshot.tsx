import React from 'react';

export const Headshot: React.FC<{ playerId: number, x: number, y: number, radius: number }> = ({ playerId, x, y, radius }) => {
    const startX = x - radius;
    const endX = x + radius;
    return (
        <>
            <path d={`M${startX},${y} A5 5 0 0 1 ${endX} ${y}`} fill="transparent" stroke="lightgray" strokeWidth={0.5}>
                <animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="rotate" from={`0 ${x} ${y}`} to={`360 ${x} ${y}`} />
            </path>
            <path d={`M${startX + 1},${y} A5 5 0 0 1 ${endX - 1} ${y}`} fill="transparent" stroke="lightgray" strokeWidth={0.5}>
                <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" from={`0 ${x} ${y}`} to={`360 ${x} ${y}`} />
            </path>
            <pattern id="image" height='100%' width='100%' viewBox="0 0 100 100">
                <image href={`http://nhl.bamcontent.com/images/headshots/current/168x168/${playerId}.jpg`} height="100%" width="100%"> </image>
            </pattern>
            <circle id="sd" cx={x} cy={y} r={radius - 2} fill="url(#image)" stroke="transparent" />
        </>
    )
}