import React, { useState } from "react";
import { Bargraph } from "./Bargraph";
import { CanadaAirportTrafficData } from "../data/CanadaAirportTraffic";

export const BargraphComponent = () => {
  const options: string[] = [];
  CanadaAirportTrafficData.forEach(el => {
    options.push(el.title);
  });
  const [data, setData] = useState([{ value: 25 }, { value: 55, isSelected: true }, { value: 35 }, { value: 92 }, { value: 36 }]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  return <>
    <select onChange={(event) => {
      const airport = CanadaAirportTrafficData[parseInt(event.currentTarget.value)];
      const newData = [];
      let max = 0;
      let min = 0;
      for (const year in airport.data) {
        const val = parseInt(airport.data[year]);
        if (val > max) max = val;
        if (val < min) min = val;
        newData.push({ value: val });
      }
      setMin(min);
      setMax(max);
      setData(newData);
    }}>
      {options.map((name, i) => (<option key={i} value={i}>{name}</option>))}
    </select>
    <Bargraph data={data} scale={(value: number) => {
      return (value - min) / (max - min) * 100;
    }} />
  </>
};
