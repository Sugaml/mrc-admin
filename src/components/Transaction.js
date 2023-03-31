import React from "react";
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from '@mui/x-data-grid';
import { listTransactionAction } from '../action/transactions';

export const Transactions = () => {
  const columns = [
    { field: 'ID', headerName: 'ID' },
    { field: 'title', headerName: 'Title',width: 400 },
    { field: 'ref_id', headerName: 'Reference ID',width: 250},
    { field: 'mode', headerName: 'Mode', width: 100 },
    { field: 'status', headerName: 'Status', width: 150 },
  ];


  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.isAuthenticated);

  const test = useSelector((state) => state.Transactions.transactions);
  console.log("transactions list:: ",test)

  React.useEffect(() => {
    dispatch(listTransactionAction(token))
  }, [dispatch, token])

  return (
    <div>
      {test && test ? (
        <div style={{ height: 400, width: 1100 }}>
          <DataGrid
            rows={test.data}
            getRowId={(row) => row.ID}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      )
        : (
          <div>
          <Typography>Transactions not found</Typography>
          </div>
        )}
    </div>
  );
}