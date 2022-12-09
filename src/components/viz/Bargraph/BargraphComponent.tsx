import React, { useState } from "react";
import { Bargraph } from "./Bargraph";

export const BargraphComponent = () => {
  const [data, setData] = useState([{ value: 25 }, { value: 55, isSelected: true }, { value: 35 }, { value: 92 }, { value: 36 }]);
  const scale = (value: number) => {
    return value;
  }
  return <>
    <Bargraph data={data} scale={scale} />
    <button onClick={() => {
      const newData = [];
      for (const el of data) {
        newData.push({ value: el.value - 10 });
      }
      setData(newData);
    }}>Click Me
    </button>  </>
};
