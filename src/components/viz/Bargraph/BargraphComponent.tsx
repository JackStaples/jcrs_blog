import React, { useState } from "react";
import { Bargraph } from "./Bargraph";
import { Linegraph } from "../Linegraph/Linegraph";
import { CanadaAirportTrafficData } from "../data/CanadaAirportTraffic";

const indexes: boolean[][] = [];
export const BargraphComponent = () => {
  let [reload, setReload] = useState(0);
  const dataset: { year: number; value: number }[] = [];
  let min = 0; let max = 0;
  for (let i = 0; i < indexes.length; i++) {
    if (!indexes[i]) continue;
    for (let j = 0; j < indexes[i].length; j++) {
      if (indexes[i][j]) {
        dataset.push(CanadaAirportTrafficData[i].data[j])
        if (CanadaAirportTrafficData[i].data[j].value < min) min = CanadaAirportTrafficData[i].data[j].value;
        if (CanadaAirportTrafficData[i].data[j].value > max) max = CanadaAirportTrafficData[i].data[j].value;
      }
    }
  }

  console.log(dataset)
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
          if (indexes[setIndex]) {
            indexes[setIndex][dataIndex] = !indexes[setIndex][dataIndex];
          } else {
            indexes[setIndex] = [];
            indexes[setIndex][dataIndex] = true;
          }
          setReload(++reload);
        }}
      />
      <Bargraph
        title={"Clicked"}
        data={dataset}
        scale={(value: number) => {
          return ((value - min) / (max - min)) * 100;
        }}
      />
    </>
  );
};
