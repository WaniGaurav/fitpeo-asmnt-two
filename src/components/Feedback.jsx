import React, { useState } from 'react'
import "./css/feedbck.css"
import CustPic from "./assets/pro_pic.jpg"
 
export function Feedback() {
  const [setstars, setSetstars] = useState("&#9733;");
  const data =[
    {
      id:1,
      custName:"Jenny Wilson",
      spanTag:"<span className='star star-yellow'>&#9733; &#9733; &#9733; &#9733;</span> &#9733;",
      custreview:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quisquam autem id amet, omnis ipsa."
    },
    {
      id:2,
      custName:"Ram jishi",
      spanTag:"<span className='star star-yellow'>&#9733; &#9733; &#9733; &#9733; &#9733;</span>",
      custreview:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quisquam autem id amet, omnis ipsa."
    },
    {
      id:3,
      custName:"Zenjya sukbir",
      spanTag:"<span className='star star-yellow'>&#9733; &#9733; &#9733; &#9733;</span> &#9733;",
      custreview:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quisquam autem id amet, omnis ipsa."
    },
    {
      id:4,
      custName:"sakh lalkns",
      startIn:'',
      startOut:setstars,
      custreview:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quisquam autem id amet, omnis ipsa."
    }
  ];
  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
        }}
    />
);
  return (
    <>
      <div className="feedback-container">
        <span className="feed-title">Customer's Feedback</span>
        {data.map((data) => (
          <div key={data.id} className="review-container">
            <div className="cust-wrap">
              <img
                loading="lazy"
                className="cust-pic"
                src={CustPic}
                alt="customer_pic"
              />
              <span className="cust-name">{data.custName}</span>
            </div>
            <span className="star-container star">
              <span class="material-symbols-outlined star-fill star star-yellow">kid_star</span>
            </span>
            <span className="cust-review">{data.custreview}</span>

            <div className="">
              <ColoredLine color="#6a6a67" />
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Feedback