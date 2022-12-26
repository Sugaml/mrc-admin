import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useDispatch, useSelector } from "react-redux";
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { studentStatusAction } from '../action/studentinfo';

export default function ResponsiveDialog( { sid,sstatus }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.isAuthenticated);
  console.log("token :: ", token)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleStatusApproved=()=>{
    const studentStatusRequest={
        "status":!sstatus,
    }
    console.log(studentStatusRequest)
    dispatch(studentStatusAction(token,sid,studentStatusRequest))
    handleClose()
  }

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
       {!sstatus ? "Approved":"Not Approved"}
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Are you want to approved?"}
        </DialogTitle>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleStatusApproved} autoFocus>
            Approved
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}