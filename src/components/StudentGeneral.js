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

export const StudentGeneral = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.isAuthenticated);
  console.log("token :: ",token)

  const users = useSelector((state) => state.Users.users);
    React.useEffect(()=>{
      dispatch(listUserAction(token))
    },[dispatch,token])


  return (
    <div>
    { users ? (
      <div>
          <Typography variant="h6" gutterBottom sx={{ pt: 2}} >Users</Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" >UID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center" >Email</TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell align="center">Active</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.ID}>
              <TableCell align="center">{user.ID}</TableCell>
              <TableCell align="center">{user.firstname +" "+user.lastname }</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center">student</TableCell>
              <TableCell align="center">{user.active}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    ) : (
     <Typography>Users not found</Typography>
    )}
  </div>
  );
}