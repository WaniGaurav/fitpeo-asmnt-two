import React from "react";
import "./css/profit.css";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  Label,
  XAxis,
} from "recharts";

export function Profit() {
  const percentNumber = "70%";
  const percentText = "Goal";
  const percentText2 = "Completed";

  const data = [
    { name: "E", value: 400, color: "#4b469c" },
    { name: "F", value: 800, color: "#688de5" },
  ];
  // function CustomLabel({viewBox, value1, value2}){
  function CustomLabel({value1, value2, value3}){
    // const {cx, cy} = viewBox;
    return (
     <text x={0} y={0} fill="white" className="recharts-text recharts-label" textAnchor="middle">
        <tspan x="22rem" dy="1rem" alignmentBaseline="middle" fontSize="5rem" fontWeight={"bolder"} >{value1}</tspan>
        <tspan x="22rem" dy="6rem" fontSize="3rem">{value2}</tspan>
        <tspan x="22rem" dy="4rem" fontSize="3rem">{value3}</tspan>
     </text>
    )
  }
  return (
    <>
      <div className="profit-wrapper">
        <div className="profit-wrapper-left">
          <span className="proTitle">Net Profit</span>
          <span className="profit-amt">$6759.25</span>
          <div className="profit-percent-wrap">
            <span className="material-symbols-outlined fontSize">
              arrow_drop_up
            </span>
            <span className="">3%</span>
          </div>
        </div>
        <div className="pro-right-container">
          <div className="profit-wrapper-right">
            <PieChart width={700} height={120}>
              <Tooltip />
              <Pie
                data={data}
                dataKey="value"
                startAngle={560}
                endAngle={200}
                cornerRadius={40}
                outerRadius={250}
                innerRadius={180}
                paddingAngle={-10}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
                <Label
                  width={20}
                  position="center"
                  content={
                    <CustomLabel value1={percentNumber} value2={percentText} value3={percentText2} />
                  }
                ></Label>
              </Pie>
            </PieChart>
          </div>
          <span className="req-text">* The values here has been rounded off.</span>
        </div>
      </div>
    </>
  );
}

export default Profit;
