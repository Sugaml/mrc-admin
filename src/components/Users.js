import React from "react";
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { listUserAction } from '../action/user';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from "@mui/material";
import Switch from '@mui/material/Switch';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export const Users = () => {
  const navigate = useNavigate();
  const columns = [
    { field: 'ID', headerName: 'ID'},
    { field: 'email', headerName: 'Email'},
    { field: 'role', headerName: 'Role' },
    {
      field: 'Status', headerName: 'Status', width: 200, renderCell: (params) => {
        return (
          <Switch
            checked={params.row.active}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        );
      }
    },
    { field: 'actions', headerName: 'Actions', width: 400, renderCell: (params) => {
      return (
        <Button
          onClick={(e) => onButtonClick(e, params.row)}
          variant="contained"
        >
         <VisibilityIcon/>
        </Button>
      );
    } }
  ];

  const onButtonClick = (e, row) => {
    e.stopPropagation();
    console.log("Test",row);
   
    navigate("/user/"+row.ID)
  };

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.isAuthenticated);

  const users = useSelector((state) => state.Users.users);
  const loading = useSelector((state) => state.Users.isUsers);
  console.log("loading = ", loading)
  console.log("users",users)
  React.useEffect(() => {
    dispatch(listUserAction(token))
  }, [dispatch, token])

  return (
    <div>
      {users ? (
        <div style={{ height: 400, width:900 }}>
          <DataGrid
            rows={users}
            getRowId={(row) => row.ID} 
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            IconButton
          />
        </div>
        )
        : (
          <Typography>Users not found</Typography>
        )}
        <div>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
        </div>
    </div>
  );
}