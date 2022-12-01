import React from "react";

export const TeamLogo: React.FC<{
  teamId: number;
}> = ({ teamId }) => {
  return (
    <>
      <pattern id="teamImage" height="100%" width="100%" viewBox="0 0 100 100">
        <image
          href={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${teamId}.svg`}
          height="50%"
          width="100%"
        >
          {" "}
        </image>
      </pattern>
      <circle
        cx="42"
        cy="20"
        r="12.5"
        fill="url(#teamImage)"
        stroke="black"
        strokeWidth={0.1}
      ></circle>
    </>
  );
};
