import React, { useState } from "react";
import { Bargraph } from "./Bargraph";

export const BargraphComponent = () => {
  const [data, setData] = useState([{ length: 25 }, { length: 55 }, { length: 35 }, { length: 92 }, { length: 36 }]);
  return <>
    <Bargraph data={data} />
    <button onClick={() => {
      const newData = [];
      for (const el of data) {
        newData.push({ length: el.length - 10 });
      }
      setData(newData);
    }}>Click Me
    </button>  </>
};
