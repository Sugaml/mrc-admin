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
import { KhaltiPayment } from '../components/KhaltiPayment';
import { FeeInformation } from '../components/FeeInformation';
import { EnrollForm } from '../components/EnrollForm';
import { User } from '../components/User';
import { Student } from '../components/Student';
import { Dashboard } from '@mui/icons-material';
import { BictCourse } from '../components/BictCourse';

export default function Router() {
  
  // const isAuth = true;
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
        { path: 'payment', element: <KhaltiPayment />},
        { path: 'account', element: <FeeInformation />},
        { path: 'enroll', element: <EnrollForm />},
        { path: 'user/:id', element: <User />},
        { path: 'student/:id', element: <Student />},
         { path: 'home', element: <Dashboard />},
        { path: 'menu', element: <BictCourse />},
        // { path: 'online', element: <CourseChoice />},
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
