import React from "react";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from "react-redux";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { getStudentGeneralAction, getUserByIDAction } from '../action/user';
import {  useParams } from 'react-router-dom';


export const User = () => {
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
          <Avatar sizes='150' alt={user.firstname} src="https://www.w3schools.com/howto/img_avatar.png" />
        }
        title={user.firstname + " " + user.lastname }
        subheader="Active"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {user.email}
        </Typography>
      </CardContent>
    </Card>
  </div>
  );
}