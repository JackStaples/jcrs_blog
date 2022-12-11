import React, { useState } from "react";
import { Bargraph } from "./Bargraph";
import { Linegraph } from "../Linegraph/Linegraph";
import { CanadaAirportTrafficData } from "../data/CanadaAirportTraffic";
import type { Airport } from "../data/CanadaAirportTraffic";

const getData = (airport: Airport) => {
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
  const [data, setData] = useState<{ year: number; value: number }[]>([]);
  const [selectedValue, setSelectedValue] = useState(0);
  const airport = CanadaAirportTrafficData[selectedValue];
  const dataset = getData(airport);
  return (
    <>
      <Linegraph<{ year: number; value: number }>
        dataset={CanadaAirportTrafficData}
        xValue="year"
        xScale={
          (value: number) => {
            return ((value - 2017) / (4)) * 100;
          }
        }
        yValue="value"
        yScale={
          (value: number) => {
            return 100 - ((value) / (19578357)) * 100;

          }
        }
        onPointSelect={(setIndex: number, dataIndex: number) => {
          const newData = [...data];
          newData.push(CanadaAirportTrafficData[setIndex].data[dataIndex]);
          setData(newData)
        }}
      />
      <Bargraph
        title={"Clicked"}
        data={data}
        scale={(value: number) => {
          return ((value - dataset.min) / (dataset.max - dataset.min)) * 100;
        }}
      />
    </>
  );
};
