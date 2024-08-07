import React from 'react'
import  './MainComponet.css'
import Activity from "./Activity";
import Feedback from "./Feedback";
import Navbar from "./Navbar";
import OrderDetails from "./OrderDetails";
import Profit from "./Profit";
import RecentOrdes from "./RecentOrdes";
import Sections from "./Sections";
import SideBar from "./Sidebar";

function MainComponet() {
  return (
    <>
    <div className="container-wrapper-main">
      <div className="">
        <Navbar />
      </div>
      <div className="container">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="wrapper">
          <h1>Dashboard</h1>
          <div className="dash-container">
            <div className="order-details">
              <OrderDetails />
            </div>
            <div className="net-profit">
              <Profit />
            </div>
            <div className="activity">
              <Activity />
            </div>
            <div className="sections">
              <Sections />
            </div>
            <div className="recent-orders">
              <RecentOrdes />
            </div>
            <div className="feedback">
              <Feedback />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default MainComponet