import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from '@mui/x-data-grid';
import { listTransactionAction } from '../action/transactions';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export const Transactions = () => {
  const columns = [
    { field: 'ID', headerName: 'ID' },
    { field: 'title', headerName: 'Title', width: 400 },
    { field: 'ref_id', headerName: 'Reference ID', width: 250 },
    { field: 'mode', headerName: 'Mode', width: 100 },
    { field: 'status', headerName: 'Status', width: 150 },
  ];


  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.isAuthenticated);

  const test = useSelector((state) => state.Transactions.transactions);
  const loading = useSelector((state) => state.Transactions.isTransactions);

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
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          // onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
    </div>
  );
}