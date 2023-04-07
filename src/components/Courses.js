import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import MenuList from '@mui/material/MenuList';
import Divider from '@mui/material/Divider';
import CreateCourse from "./CreateCourse";
import { useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse, getAllCourses } from '../action/courses';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';


export const Courses = () => {
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);


    const token = useSelector((state) => state.auth.isAuthenticated);
    const courses = useSelector((state) => state.Courses.courses);
    const loading = useSelector((state) => state.Courses.fetchingCourse);

    React.useEffect(() => {
        dispatch(getAllCourses())
    }, [dispatch])
    console.log(courses)

    const handleIcon = () => {
        console.log(";;;;;;")
    }

    const handleDelete=(id)=> {
        console.log("delete action",id)
      // Perform delete action
      console.log("delete id :: ", id)
      dispatch(deleteCourse(token, id))
      handleCancelDelete()
    }
  
    function handleCancelDelete() {
      setOpen(false);
    }

    return (
        <div>
           {courses ? (
            <Container>
                <div></div>
                <Typography
                    component="h6"
                    variant="h6"
                    color="text.primary"
                    gutterBottom
                >
                    Available Course
                </Typography>
                <div >
                    <CreateCourse />
                </div>
                <Grid lg container spacing={2} alignItems="flex-end">
                    {courses.map((course) => (
                        <Grid
                            item
                            key={course.name}
                            xs={12}
                            sm={course.name === 'Enterprise' ? 12 : 6}
                            md={6}
                        >
                            <Card>
                                <CardHeader
                                    title={<div>
                                        <Grid container >
                                            <Grid item md={8}>
                                                <Typography variant='h4' >
                                                    {course.name}
                                                </Typography>
                                            </Grid>
                                            <Grid item md={2}>
                                                <span onClick={() => handleIcon()}
                                                    style={{ cursor: "pointer" }}
                                                ><CreateIcon /></span>
                                            </Grid>

                                            <Grid item md={2}>
                                                <div>
                                                    <span onClick={() => setOpen(true)}
                                                        style={{ cursor: "pointer" }}
                                                    ><DeleteIcon /> </span>
                                                        <Dialog open={open} onClose={handleCancelDelete}>
                                                            <DialogTitle>Confirm Delete</DialogTitle>
                                                            <DialogContent>
                                                                Are you sure you want to delete this item?
                                                            </DialogContent>
                                                            <DialogActions>
                                                                <Button onClick={()=>handleCancelDelete()}>Cancel</Button>
                                                                <Button onClick={()=>handleDelete(course.ID)} variant="contained" color="error">Delete</Button>
                                                            </DialogActions>
                                                        </Dialog>
                                                   
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>}
                                    titleTypographyProps={{ align: 'center' }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent sx={{
                                    display: 'flex',
                                    mb: 2,
                                    flexDirection: "column",
                                    justifyContent: 'center',
                                    alignItems: 'baseline',
                                }}>
                                    <Divider />
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,
                                        }}
                                    >
                                        <Typography component="h3" variant="h4" color="text.primary">
                                            Rs.{course.fee}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            /semester
                                        </Typography>
                                    </Box>
                                    <MenuList sx={{
                                        display: 'flex',
                                        width: '100%',
                                        flexDirection: 'column',
                                        px: 1,
                                        mt: 1,
                                    }}>
                                        <MenuItem>
                                            <ListItemText>Duration</ListItemText>
                                            <Typography variant="body2">
                                                {course.duration}/month
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem>
                                            <ListItemText>Years</ListItemText>
                                            <Typography variant="body2">
                                                {course.year}/yrs
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem>
                                            <ListItemText>Credit Hours</ListItemText>
                                            <Typography variant="body2">
                                                {course.credit_hours}
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem>
                                            <ListItemText>Subject</ListItemText>
                                            <Typography variant="body2">
                                                {course.subject}
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem>
                                            <ListItemText>Seat</ListItemText>
                                            <Typography variant="body2">
                                                {course.quota}
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem>
                                            <ListItemText>Faculty</ListItemText>
                                            <Typography variant="body2">
                                                {course.faculty}
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem>
                                            <ListItemText>Affilated By</ListItemText>
                                            <Typography variant="body2">
                                                {course.affiliated_by}
                                            </Typography>
                                        </MenuItem>
                                    </MenuList>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
           ):(
            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
            // onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
           )}
        </div>
    )
}