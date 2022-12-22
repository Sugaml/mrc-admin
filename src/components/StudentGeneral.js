import React from "react";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from "react-redux";
import { listUserAction } from '../action/user';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Navigate } from "react-router-dom";
import { SignIn } from "./Signin";
import { useNavigate } from "react-router-dom";






export const StudentGeneral = () => {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();
  const columns = [
    { field: 'ID', headerName: 'ID'},
    { field: 'firstname', headerName: 'First name'},
    { field: 'lastname', headerName: 'Last name' },
    { field: 'email', headerName: 'Email'},
    { field: 'role', headerName: 'Role' },
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
    //do whatever you want with the row
    console.log("Test",row);
   
    navigate("online")
    // return <Navigate to="/signin" />;
  };

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
            IconButton
          />
        </div>
        )
        : (
          <Typography>Users not found</Typography>
        )}
    </div>
  );
}