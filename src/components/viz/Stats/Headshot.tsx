import React from 'react';

export const Headshot: React.FC<{ playerId: number, height: number, width: number }> = ({ playerId, height, width }) => {
    return (
        <>
            <svg height={height} width={width} viewBox='0 0 100 100'>
                <path d={`M2,50 A5 5 0 0 1 98 50`} fill="transparent" stroke="black" strokeWidth={0.5}>
                    <animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="rotate" from={`0 50 50`} to={`360 50 50`} />
                </path>
                <path d={`M4,50 A5 5 0 0 1 95 50`} fill="transparent" stroke="black" strokeWidth={0.5}>
                    <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" from={`0 50 50`} to={`360 50 50`} />
                </path>
                <pattern id="playerImage" height='100%' width='100%' viewBox="0 0 100 100">
                    <image href={`http://nhl.bamcontent.com/images/headshots/current/168x168/${playerId}.jpg`} height="100%" width="100%"> </image>
                </pattern>
                <circle id="sd" cx={50} cy={50} r={45} fill="url(#playerImage)" stroke="transparent" />
            </svg>
        </>
    )
}