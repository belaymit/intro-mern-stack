import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import './single.scss';
import DataTable from '../../components/table/DataTable';

const Single = () => (
  <div className="single">
    <Sidebar />
    <div className="single-container">
      <Navbar />
      <div className="top">
        <div className="left container">
          <div className="edit-btn">Edit</div>
          <h1 className="title">Information</h1>
          <div className="item">
            <img className="item-img" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="user-avatar" />
            <div className="details">
              <h1 className="item-title">Jane Doe</h1>
              <div className="detail-item">
                <span className="item-key">Email: </span>
                <span className="item-value">janedoe@gmail.com</span>
              </div>
              <div className="detail-item">
                <span className="item-key">Phone: </span>
                <span className="item-value">+251 9x-xyz-abcd</span>
              </div>
              <div className="detail-item">
                <span className="item-key">Address: </span>
                <span className="item-value">XYZ Street, 24 Something</span>
              </div>
              <div className="detail-item">
                <span className="item-key">Country: </span>
                <span className="item-value">Africa</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Chart title="User Spending(last six months)" aspect={4 / 1} />
        </div>
      </div>
      <div className="bottom container">
        <h1 className="title">Last Transactions</h1>
        <DataTable />
      </div>
    </div>
  </div>
);

export default Single;
