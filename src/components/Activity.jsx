import React, { useState } from "react";
import "./css/activity.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

export function Activity() {
  const [value, setValue] = useState("weekly");
  const handleChange = (event) => {

    setValue(event.target.value);
 
  };
  const data = [
    {
      "name": "5",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "9",
      "uv": 3000,
      "pv": 11398
    },
    {
      "name": "12",
      "uv": 12000,
      "pv": 9800
    },
    {
      "name": "15",
      "uv": 5500,
      "pv": 6800
    },
    {
      "name": "17",
      "uv": 14000,
      "pv": 13800
    },
    {
      "name": "19",
      "uv": 13000,
      "pv": 12800
    },
    {
      "name": "21",
      "uv": 5000,
      "pv": 15000
    },
    {
      "name": "23",
      "uv": 5200,
      "pv": 9800
    },
    {
      "name": "25",
      "uv": 8000,
      "pv": 5800
    },
  ];
  return (
    <>
      <div className="activity-container">
        <div className="act-nav">
          <span className="act-title">Activity</span>
          <div className="act-dropdown">
            <select
              className="act-select"
              value={value}
              onChange={handleChange}
            >
              <option value="fruit">Weekly</option>

              <option value="vegetable">Monthly</option>

              <option value="meat">Quaterly</option>
            </select>
            <span className="material-symbols-outlined arrow-drop-down">arrow_drop_down</span>
          </div>
        </div>
        <div className="barchart-container">
          <BarChart
            width={770}
            height={300}
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
            padding={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" padding="no-gap" tick={{ fill: "white" }} />
            <YAxis type="number" domain={[0, 15000]} tick={{ fill: "white" }} />
            <Bar dataKey="uv" fill="#688de5" radius={15} />
            <Bar dataKey="pv" fill="#688de5" radius={15} />
          </BarChart>
        </div>
      </div>
    </>
  );
}

export default Activity;
