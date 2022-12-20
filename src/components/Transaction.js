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

export const Transactions = () => {

  return (
    <div>
          <Typography variant="h6" gutterBottom sx={{ pt: 2}} >Transactions</Typography>
          <Typography variant="body" gutterBottom sx={{ pt: 2}} >No Transaction list</Typography>
  </div>
  );
}