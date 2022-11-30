import React from 'react';

export const TeamLogo: React.FC<{ teamId: number, height: number, width: number }> = ({ teamId, height, width }) => {
    return (
        <>
            <svg viewBox='0 0 100 100' height={height} width={width}>
                <pattern id="teamImage" height='100%' width='100%' viewBox="0 0 100 100">
                    <image href={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${teamId}.svg`} height="100%" width="100%"> </image>
                </pattern>
                <circle id="sd" cx={50} cy={50} r={45} fill="url(#teamImage)" stroke="transparent" />
            </svg>
        </>
    )
}