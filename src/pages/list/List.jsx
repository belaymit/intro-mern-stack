import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DataTable from '../../components/data-table/DataTable';
import './list.scss';

const List = () => (
  <div className="list">
    <Sidebar />
    <div className="list-container">
      <Navbar />
      <DataTable />
    </div>
  </div>
);

export default List;
