import React from "react";
import { Bargraph } from "./Bargraph";

export const BargraphComponent = () => {
  const data = [{ length: 25 }, { length: 55 }, { length: 35 }];
  return <Bargraph data={data} />;
};
