import React from 'react'
import "./css/sections.css"

export function Sections() {
  let data = [
    {
      id:"1",
      symbol : "target",
      text:"Goals",
      classes : "section-bg-color-red",
      arrowDirection:"chevron_right"
    },
    {
      id:"2",
      symbol: "lunch_dining",
      text: "Popular Dishes",
      classes: "section-bg-color-blue",
      arrowDirection: "chevron_right",
    },
    {
      id:"3",
      symbol: "menu_book",
      text: "Menus",
      classes: "section-bg-color-green",
      arrowDirection: "chevron_right",
    },
  ];
  return (
    <>
    <div className="section-containe-bg">
      {data.map((data) => (
        <div key={data.id} className="section-container">
              <div className="section-content">
                <div className={`section-bg ${data.classes}`}>
                  <span className="material-symbols-outlined section-synbol-size">{data.symbol}</span>
                </div>
                <span className="section-text">{data.text}</span>
              </div>
              <div className="secton-arrow">
                <span className="material-symbols-outlined">{data.arrowDirection}</span>
              </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Sections