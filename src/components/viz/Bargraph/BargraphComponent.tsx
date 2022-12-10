import React, { useState } from "react";
import { Bargraph } from "./Bargraph";
import { CanadaAirportTrafficData } from "../data/CanadaAirportTraffic";

const getData = (index: number) => {
  const airport = CanadaAirportTrafficData[index];
  const newData = [];
  let max = 0;
  let min = 0;
  for (const year of airport.data) {
    const { value } = year;
    if (value > max) max = value;
    if (value < min) min = value;
    newData.push(year);
  }
  return { min, max, data: newData };
};

export const BargraphComponent = () => {
  const options: string[] = [];
  CanadaAirportTrafficData.forEach((el) => {
    options.push(el.title);
  });
  const [selectedValue, setSelectedValue] = useState(0);
  const dataset = getData(selectedValue);
  return (
    <>
      <select
        onChange={(event) => {
          setSelectedValue(parseInt(event.currentTarget.value));
        }}
      >
        {options.map((name, i) => (
          <option key={`${i}${parseInt(event.currentTarget.value)}`} value={i}>
            {name}
          </option>
        ))}
      </select>
      <Bargraph
        data={dataset.data}
        scale={(value: number) => {
          return ((value - dataset.min) / (dataset.max - dataset.min)) * 100;
        }}
      />
    </>
  );
};
