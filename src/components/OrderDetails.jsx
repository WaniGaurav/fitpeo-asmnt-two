import React from 'react'
import './css/orderDetails.css'

function OrderDetails() {
  let details = [
    {
      id:1,
      iconName:"shopping_cart",
      iconBGclr:"iconbgclr-one",
      heading:"Total Orders",
      orderNumber:"75",
      arrowIconName:"arrow_drop_up",
      arrowIconClass:"percent-up",
      percentage:"3%",
    },
    {
      id:2,
      iconName:"shopping_bag",
      iconBGclr:"iconbgclr-two",
      heading:"Total Delivered",
      orderNumber:"70",
      arrowIconName:"arrow_drop_down",
      arrowIconClass:"percent-down",
      percentage:"3%",
    },
    {
      id:3,
      iconName:"no_backpack",
      iconBGclr:"iconbgclr-three",
      heading:"Total Cancelled",
      orderNumber:"05",
      arrowIconName:"arrow_drop_up",
      arrowIconClass:"percent-up",
      percentage:"3%",
    },
    {
      id:4,
      iconName:"stat_minus_3",
      iconBGclr:"iconbgclr-four",
      heading:"Total Revenue",
      orderNumber:"$12k",
      arrowIconName:"arrow_drop_down",
      arrowIconClass:"percent-down",
      percentage:"3%",
    },
  ];
  return (
    <>
      {details.map((details) => (
        <div key={details.id}  className="order-wrapper">
          <div className={`iconbg ${details.iconBGclr}`}>
            <span className="material-symbols-outlined">{details.iconName}</span>
          </div>
          <span className="">{details.heading}</span>
          <div className="order-value">
            <span className="order-Number">{details.orderNumber}</span>
            <div className="order-percent">
              <span className={`material-symbols-outlined fontStyle ${details.arrowIconClass}`}>{details.arrowIconName}</span>
              <span className={`percent ${details.arrowIconClass}`}>{details.percentage}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default OrderDetails