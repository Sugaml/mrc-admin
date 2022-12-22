import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Course } from '../course';
import { EnrollForm } from '../EnrollForm';
import { Home } from '../Home';
import { SignIn } from '../Signin';
import { SignUp } from '../Signup';
import PrivateRoute from "./PrivateRouting";
import { BictCourse } from '../BictCourse';
import { CourseChoice } from '../CourseChoice';
import {CustomizedSnackbars} from '../SnackBar'
import { ForgotPassword } from '../ForgotPassword';
import {KhaltiPayment} from '../KhaltiPayment';
import { Dashboard } from '../Dashboard';

import { FeeInformation } from '../FeeInformation';
import { User } from '../User';
import { Student } from '../Student';
 

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/logout' element={<SignUp/>}/>
        
        <Route path='/forgot_password' element={<ForgotPassword />} />
        <Route element={<PrivateRoute />}>
        <Route index path='/dashboard' element={<Dashboard/>}/>
        <Route path='/account' element={<FeeInformation/>}/>
        <Route  path='/enroll' element={<EnrollForm />} /> 
        <Route index path='/billing' element={<KhaltiPayment />} />
        <Route path='/user/:id' element={<User/>}/>
        <Route path='/student/:id' element={<Student/>}/>
        <Route index path='/courses' element={<Course />} />
        
        <Route path='/menu' element={<BictCourse />} />
        <Route path='/snack' element={<CustomizedSnackbars />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Router



