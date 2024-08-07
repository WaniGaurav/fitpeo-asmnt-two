import React from 'react'
import "./css/recentorders.css"
import DataTable ,{ createTheme  } from 'react-data-table-component'

export function RecentOrdes() {
  // const data2 = [
  //   { id:"1", name: "Anom", orderNo: 12345239, amount:"$234", status:"Deliverd" },
  //   { id:"2", name: "Megha", orderNo: 154679, amount:"$45", status:"Deliverd" },
  //   { id:"3", name: "Subham", orderNo: 25235345, amount:"$61", status:"Pending" },
  // ];
  
  

  const columns = [
    {
      name: 'Customer',
      selector: row => row.name,
    },
    {
      name: 'Order No.',
      selector: row => row.order,
    },
    {
      name: 'Amount',
      selector: row => row.amt,
    },
    {
      name: 'Status',
      selector: row => row.status,
    },
  ];
  
  const data = [
      {
      id: 1,
      name: 'Anom',
      order: '1988234',
      amt: "$342",
      status: "Delivered",
    },
    {
      id: 2,
      name: 'Megha',
      order: '5235235',
      amt: "$23",
      status: "Delivered",
    },
    {
      id: 3,
      name: 'Sita',
      order: '76731134',
      amt: "$345",
      status: "Pending",
    },
    {
      id: 4,
      name: 'ramesh',
      order: '363566',
      amt: "$1234",
      status: "Pending",
    },
    {
      id: 5,
      name: 'Suresh',
      order: '75634556',
      amt: "$123",
      status: "Delivered",
    },
  ]

  return (
    <>
      <div className="orders-container">
        <div className="orders-wrapper">
          <span className="order-title">Recent Orders</span>
          <div className="orderes-details">
            {/* <DataTable columns={columns} data={data} selectableRows /> */}

            <DataTable
              columns={columns}
              data={data}
              style={`background : "#343333"`}
              selectableRows
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentOrdes