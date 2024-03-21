import  React from 'react';
import Avatar from '@mui/material/Avatar';
import Table from '@material-ui/core/Table';
import TablePagination from '@mui/material/TablePagination';
import TableHead from '@mui/material/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { columns } from './UserList.config';
import './style.css';

const UserListTable = ({ data, handleRowClick, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage }) => {
  return (
    <div className="tableContainer">
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} onClick={() => handleRowClick(row)}>
              <TableCell style={{ width: '100px' }}><Avatar alt={row.login} src={row.avatar_url} /></TableCell>
              <TableCell>{row.login}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5,10,25]}
        component="div"
        count={30}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default UserListTable;