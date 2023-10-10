// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Students',
    path: '/dashboard/students',
    icon: icon('ic_user'),
  },
  {
    title: 'Courses',
    path: '/dashboard/courses',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Transaction',
    path: '/dashboard/transaction',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Student',
    path: '/dashboard/student',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Account',
    path: '/dashboard/accounts',
    icon: icon('ic_analytics'),
  },
  {
    title: 'product',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;