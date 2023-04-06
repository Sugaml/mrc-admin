import React from "react";
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from '@mui/x-data-grid';
import { Button, Divider } from "@mui/material";
import Switch from '@mui/material/Switch';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";
import ResponsiveDialog from "./ResponsiveDialog";
import { listStudentAction } from "../action/studentinfo";

export const Students = () => {
  const navigate = useNavigate();
  const columns = [
    { field: 'ID', headerName: 'ID' },
    { field: 'firstname', headerName: 'First name' },
    { field: 'lastname', headerName: 'Last name' },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'Status', headerName: 'Status', width: 100, renderCell: (params) => {
        return (
          <Switch
            checked={params.row.is_approved}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        );
      }
    },
    {
      field: 'approved', headerName: 'Approved', width: 200, renderCell: (params) => {
        return (
          // <Button
          //   onClick={(e) => onButtonClick(e, params.row)}
          //   variant="contained"
          // >
          //   Approved
          // </Button>
          <ResponsiveDialog sid={params.row.ID}
           sstatus={params.row.is_approved}
           />
        );
      }
    },
    {
      field: 'actions', headerName: 'Actions', width: 200, renderCell: (params) => {
        return (
          <Button
            onClick={(e) => onButtonClick(e, params.row)}
            variant="contained"
          >
            <VisibilityIcon />
          </Button>
        );
      }
    },
   
   
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

  const students = useSelector((state) => state.Students.students);
  console.log("users", students)
  React.useEffect(() => {
    dispatch(listStudentAction(token))
  }, [dispatch, token])

  return (
    <div>
      {students ? (

        <div style={{ height: 400, width: "90vw" }}>
          <DataGrid
            rows={students}
            getRowId={(row) => row.ID}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            density={"comfortable"}
            checkboxSelection
            IconButton
          />
        </div>
      )
        : (
          <Typography>student not found</Typography>
        )}
    </div>
  );
}