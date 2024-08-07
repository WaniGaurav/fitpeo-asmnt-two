import React from 'react'
import Propic from './assets/pro_pic.jpg'

export function Navbar() {
  // To Do ....creating funtion for nav right!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // let navRight = [mail, settings,notifications];
  let navRight = [
    {
      id:11,
      iconName:"mail",
    },
    {
      id:12,
      iconName:"settings",
    },
    {
      id:13,
      iconName:"notifications",
    }
  ];
  return (
    <>
      <div className="navbar-component">
        <div className="nav-left">
          <span className="material-symbols-outlined">search</span>
          <input
            type="search"
            className="searchBox"
            name=""
            id=""
            placeholder="Search"
          />
        </div>
        <div className="nav-right">
          {navRight.map((names) => (
            <div key={names.id} className="circle-bg">
              <span className="material-symbols-outlined icons">{names.iconName}</span>
            </div>
          ))}
          <div className="">
            <img src={Propic} className="proPic" alt="Profile pic" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar