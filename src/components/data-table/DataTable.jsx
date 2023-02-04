import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { userColumns, userRows } from '../../common/dataTableSource';
import '../../styles/dataTable.scss';

const DataTable = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => (
        <div className="cell-action">
          <Link to="single-user" style={{ textDecoration: 'none' }}>
            <div className="view-button">View</div>
          </Link>
          <div className="delete-button" onClick={() => handleDelete(params.row.id)} role="presentation">Delete</div>
        </div>
      ),
    },
  ];
  return (
    <div className="data-table">
      <div className="data-table-title">
        Add New User
        <Link to="/users/new" style={{ textDecoration: 'none' }} className="link">Add New User</Link>
      </div>
      <DataGrid
        className="data-grid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
