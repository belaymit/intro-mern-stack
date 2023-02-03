import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../common/dataTableSource';
import '../../styles/dataTable.scss';

const DataTable = () => {
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: () => (
        <div className="cell-action">
          <div className="view-button">View</div>
          <div className="delete-button">Delete</div>
        </div>
      ),
    },
  ];
  return (
    <div className="data-table">
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
