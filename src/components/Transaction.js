import React from "react";
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from '@mui/x-data-grid';
import { Button } from "@mui/material";
import Switch from '@mui/material/Switch';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";
import { listTransactionAction } from '../action/transactions';

export const Transactions = () => {
  const navigate = useNavigate();
  const columns = [
    { field: 'ID', headerName: 'ID' },
    { field: 'title', headerName: 'Title',width: 400 },
    { field: 'ref_id', headerName: 'Reference ID',width: 250},
    { field: 'mode', headerName: 'Mode', width: 100 },
    { field: 'status', headerName: 'Status', width: 150 },
   
   
  ];



  const onButtonClick = (e, row) => {
    e.stopPropagation();
    //do whatever you want with the row
    console.log("Test", row);

    navigate("/student/" + row.ID)
  };


  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.isAuthenticated);
  console.log("token :: ", token)

  const transactions = useSelector((state) => state.Transactions.transactions);

  console.log("transactions Data:: ",transactions.data.data)

  React.useEffect(() => {
    dispatch(listTransactionAction(token))
  }, [dispatch, token])

  return (
    <div>
      {transactions ? (
        <div style={{ height: 400, width: 1100 }}>
          <DataGrid
            rows={transactions.data.data}
            getRowId={(row) => row.ID}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      )
        : (
          <Typography>Transactions not found</Typography>
        )}
    </div>
  );
}