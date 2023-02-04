import React from 'react';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import DataTable from '../../components/table/DataTable';
import Widget from '../../components/widgets/Widget';
import './home.scss';

const Home = () => (
  <div className="home">
    <Sidebar />
    <div className="home-container">
      <Navbar />
      <div className="widgets">
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earnings" />
        <Widget type="balance" />
      </div>
      <div className="charts">
        <Featured />
        <Chart title="Last six moths' Transactions" aspect={3 / 1} />
      </div>
      <div className="list-container container">
        <div className="list-title">Latest Transactions</div>
        <DataTable />
      </div>
    </div>
  </div>
);

export default Home;
