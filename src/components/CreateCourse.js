import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import DialogContentText from '@mui/material/DialogContentText';
import { useDispatch, useSelector } from "react-redux";
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { studentStatusAction } from '../action/studentinfo';
import * as Yup from 'yup';
import { YouTube } from '@mui/icons-material';

export default function CreateCourse({ sid, sstatus }) {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const dispatch = useDispatch();

    const token = useSelector((state) => state.auth.isAuthenticated);
    console.log("token :: ", token)
    const formik = useFormik({
        initialValues: {
            cname: "",
            years: "",
            duration: "",
            fee: "",
            subject: "",
            seat: "",
            faculty: "",
            affiliated_by:"",
            credit_hour:"",
        },

        validationSchema: Yup.object({
            cname: Yup.string().required("required course name"),
            years: Yup.string().required("required course years"),
            duration: Yup.string().required("required course duration"),
            fee: Yup.string().required("required course fee"),
            subject: Yup.string().required("required course fee"),
            seat: Yup.string().required("required course seat"),
            faculty: Yup.string().required("required course faculty"),
            affiliated_by: Yup.string().required("required course affiliated by"),
            credit_hour:Yup.string().required("required course credit hours"),
        }),
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleStatusApproved = () => {
       
        console.log("create button hit")
        
    }
   
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", padding: 10 }}>
                <Button variant="contained" onClick={handleClickOpen}>
                    Create Course
                </Button>
            </div>
            <Dialog
                fullScreen={fullScreen}
                fullWidth={true}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <div style={{ padding: 10 }}>
                    <Typography
                        component="h6"
                        variant="h6"
                        color="text.primary"
                        gutterBottom
                    >
                        Create Course
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                required
                                id="cname"
                                name="cname"
                                label="Course Name"
                                value={formik.values.cname}
                                fullWidth
                                autoComplete="given-name"
                                variant="outlined"
                                error={formik.touched.cname && formik.errors.cname ? true : false}
                                helperText={formik.errors.cname}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                required
                                id="years"
                                name="years"
                                label="Completed Years"
                                value={formik.values.years}
                                fullWidth
                                autoComplete="given-name"
                                variant="outlined"
                                error={formik.touched.years && formik.errors.years ? true : false}
                                helperText={formik.errors.years}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} >
                            <TextField
                                required
                                id="duration"
                                name="duration"
                                label="Course Duration"
                                value={formik.values.duration}
                                fullWidth
                                autoComplete="given-name"
                                variant="outlined"
                                error={formik.touched.duration && formik.errors.duration ? true : false}
                                helperText={formik.errors.duration}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                required
                                id="fee"
                                name="fee"
                                label="Course fee"
                                value={formik.values.fee}
                                fullWidth
                                autoComplete="given-name"
                                variant="outlined"
                                error={formik.touched.fee && formik.errors.fee ? true : false}
                                helperText={formik.errors.fee}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} >
                            <TextField
                                required
                                id="subject"
                                name="subject"
                                label="Course subject"
                                value={formik.values.subject}
                                fullWidth
                                autoComplete="given-name"
                                variant="outlined"
                                error={formik.touched.subject && formik.errors.subject ? true : false}
                                helperText={formik.errors.subject}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} >
                            <TextField
                                required
                                id="faculty"
                                name="faculty"
                                label="Course faculty"
                                value={formik.values.faculty}
                                fullWidth
                                autoComplete="given-name"
                                variant="outlined"
                                error={formik.touched.faculty && formik.errors.faculty ? true : false}
                                helperText={formik.errors.faculty}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} >
                            <TextField
                                required
                                id="seat"
                                name="seat"
                                label="Course seat"
                                value={formik.values.seat}
                                fullWidth
                                autoComplete="given-name"
                                variant="outlined"
                                error={formik.touched.seat && formik.errors.seat ? true : false}
                                helperText={formik.errors.seat}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} >
                            <TextField
                                required
                                id="affiliated_by"
                                name="affiliated_by"
                                label="Course affiliated_by"
                                value={formik.values.affiliated_by}
                                fullWidth
                                autoComplete="given-name"
                                variant="outlined"
                                error={formik.touched.affiliated_by && formik.errors.affiliated_by ? true : false}
                                helperText={formik.errors.affiliated_by}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} >
                            <TextField
                                required
                                id="credit_hour"
                                name="credit_hour"
                                label="Course credit hours"
                                value={formik.values.affiliated_by}
                                fullWidth
                                autoComplete="given-name"
                                variant="outlined"
                                error={formik.touched.credit_hour && formik.errors.credit_hour ? true : false}
                                helperText={formik.errors.credit_hour}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Grid>

                    </Grid>
                </div>
                <DialogActions>
                    <Button autoFocus variant="contained" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={handleStatusApproved} autoFocus>
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}