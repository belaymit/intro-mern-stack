import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import formData from '../../common/formData';
import '../../styles/table.scss';

const DataTable = () => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table" className="table">
      <TableHead>
        <TableRow>
          <TableCell className="table-cell">Tracking ID</TableCell>
          <TableCell className="table-cell">Product</TableCell>
          <TableCell className="table-cell">Customer</TableCell>
          <TableCell className="table-cell">Date</TableCell>
          <TableCell className="table-cell">Amount</TableCell>
          <TableCell className="table-cell">Payment Method</TableCell>
          <TableCell className="table-cell">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {formData.map((row) => (
          <TableRow
            key={row.id}
          >
            <TableCell className="table-cell">{row.id}</TableCell>
            <TableCell className="table-cell">
              <div className="cell-wrapper">
                <img src={row.img} alt={row.product} />
                {row.product}
              </div>
            </TableCell>
            <TableCell className="table-cell">{row.customer}</TableCell>
            <TableCell className="table-cell">{row.date}</TableCell>
            <TableCell className="table-cell">{row.amount}</TableCell>
            <TableCell className="table-cell">{row.method}</TableCell>
            <TableCell className="table-cell">
              <span className={`status ${row.status}`}>{row.status}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default DataTable;
