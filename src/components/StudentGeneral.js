import React from "react";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from "react-redux";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { getStudentGeneralAction, listUserAction } from '../action/user';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'ID', headerName: 'ID'},
  { field: 'firstname', headerName: 'First name'},
  { field: 'lastname', headerName: 'Last name' },
  { field: 'email', headerName: 'Email'},
  { field: 'role', headerName: 'Role' },
];


export const StudentGeneral = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.isAuthenticated);
  console.log("token :: ", token)

  const users = useSelector((state) => state.Users.users);
  console.log("users",users)
  React.useEffect(() => {
    dispatch(listUserAction(token))
  }, [dispatch, token])


  return (
    <div>
      {users ? (
        <div style={{ height: 400, width:700 }}>
          <DataGrid
            rows={users}
            getRowId={(row) => row.ID} 
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
        )
        : (
          <Typography>Users not found</Typography>
        )}
    </div>
  );
}