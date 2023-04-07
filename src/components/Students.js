import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from '@mui/x-data-grid';
import { Button } from "@mui/material";
import Switch from '@mui/material/Switch';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";
import ResponsiveDialog from "./ResponsiveDialog";
import { listStudentAction } from "../action/studentinfo";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

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

  const students = useSelector((state) => state.Students.students);
  const loading = useSelector((state) => state.Students.isStudents);

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