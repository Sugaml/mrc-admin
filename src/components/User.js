import React from "react";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from "react-redux";
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import {  getUserByIDAction } from '../action/user';
import FormControlLabel from '@mui/material/FormControlLabel';
import {  useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Switch } from "@mui/material";
import MediaControlCard from "./MediaControlCardd";
import ResponsiveDialog from "./ResponsiveDialog";


export const User = () => {
    const theme = useTheme();
 const params = useParams();
  const dispatch = useDispatch();
  console.log("id :: ",params.id)
  const token = useSelector((state) => state.auth.isAuthenticated);
  console.log("token :: ", token)
  const user = useSelector((state) => state.UserDetail.userDetail);
    React.useEffect(()=>{
      dispatch(getUserByIDAction("",params.id))
    },[dispatch,token,params.id])

console.log("user ",user)
  return (
    user && !!user.ID && <div>
    <Card sx={{ maxWidth: 1200 }}>
      <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" alt={user.firstname} src="https://www.w3schools.com/howto/img_avatar.png">
          {user.firstname}
        </Avatar>
      }
      action={
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <FormControlLabel control={<Switch defaultChecked />} label="Make Admin" />
        <FormControlLabel control={<Switch defaultChecked />} label="Active" />
        <ResponsiveDialog sid={user.ID}
           sstatus={user.active}
           />
        </Box>
      }
        title={user.firstname + " " + user.lastname }
        subheader="Active"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}></Box>
      <CardContent sx={{ flex: '1 0 auto' }}>
      <Typography variant="body2" color="text.secondary">
        {user.email}
        </Typography>
      </CardContent>
      <Box/>
    </Card>
  </div>
  );
}