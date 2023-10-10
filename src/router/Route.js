import { Navigate,useRoutes } from 'react-router-dom'; // Import necessary components
import { useSelector } from 'react-redux';
import SimpleLayout from '../layouts/simple';
import DashboardLayout from '../layouts/dashboard';
import DashboardAppPage from '../pages/DashboardAppPage';
import LoginPage from '../pages/LoginPage';
import UserPage from '../pages/UserPage';
import ProductsPage from '../pages/ProductsPage';
import BlogPage from '../pages/BlogPage'
import Page404 from '../pages/Page404';
import { FeeInformation } from '../components/FeeInformation';
import { EnrollForm } from '../components/EnrollForm';
import { User } from '../components/User';
import { Student } from '../components/Student';
import { Transactions } from '../components/Transaction';
import { Students } from '../components/Students';
import { Courses } from '../components/Courses';
import { Users } from '../components/Users';
import StudentPage from '../pages/StudentPage';
import TransactionPage from '../pages/TransactionPage';

export default function Router() {
  
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const routes = useRoutes([
    {
      path: '/dashboard',
      element: isAuth ? <DashboardLayout /> : <Navigate to="/login" />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'student', element: <StudentPage /> },
        { path: 'account', element: <FeeInformation /> },
        { path: 'enroll', element: <EnrollForm /> },
        { path: 'user/:id', element: <User /> },
        { path: 'accounts', element: <Users/>},
        { path: 'student/:id', element: <Student /> },
        { path: 'courses', element: <Courses /> },
        { path: 'students', element: <Students /> },
        { path: 'transactions', element: <Transactions /> },
        { path: 'transaction', element: <TransactionPage /> },
      ],
    },
    {
      path: 'login',
      element: isAuth ? <Navigate to="/dashboard/app" /> : <LoginPage />,
    },
    {
      path: '/',
      element: isAuth ? <Navigate to="/dashboard/app" /> : <LoginPage />,
    },
    {
      element: isAuth ? <Navigate to="/dashboard/app" /> : <SimpleLayout />,
      children: [
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
