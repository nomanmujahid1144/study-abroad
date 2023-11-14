import { Icon } from '@chakra-ui/react';
import { MdDashboard, MdHome } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';

// Admin Imports
import DashboardsDefault from 'views/admin/dashboards/default/userIndex';
import UniversityFinder from 'views/admin/main/users/userData/universityfinder';
import Scholarsips from 'views/admin/main/users/userData/scholarships';
import Accomodation from 'views/admin/main/users/userData/accomodation';

const routes = [
  // --- Dashboards ---
  // {
  //   name: 'Dashboards',
  //   layout: '/admin',
  //   path: '/dashboards/default',
  //   component: <DashboardsDefault />,
  //   icon: <Icon as={MdDashboard} width="20px" height="20px" color="inherit" />,
  // },
  {
    name: 'University Finder',
    layout: '/admin',
    path: '/main/users-data/university-finder',
    component: <UniversityFinder />,
    icon: <Icon as={FaWpforms} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Scholarships Data',
    layout: '/admin',
    path: '/main/users-data/scholarship-data',
    component: <Scholarsips />,
    icon: <Icon as={FaWpforms} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Accomodation Data',
    layout: '/admin',
    path: '/main/users-data/accomodation-data',
    component: <Accomodation />,
    icon: <Icon as={FaWpforms} width="20px" height="20px" color="inherit" />,
  },
  // {
  //   name: 'Data',
  //   path: '/main/users-data',
  //   icon: <Icon as={MdDashboard} width="20px" height="20px" color="inherit" />,
  //   collapse: true,
  //   items: [
  //     {
  //       name: 'University Finder',
  //       layout: '/admin',
  //       path: '/main/users-data/university-finder',
  //       exact: false,
  //       component: <UniversityFinder />,
  //     },
  //     {
  //       name: 'Scholarships Data',
  //       layout: '/admin',
  //       path: '/main/users-data/scholarship-data',
  //       exact: false,
  //       component: <Scholarsips />,
  //     },
  //     {
  //       name: 'Accomodation Data',
  //       layout: '/admin',
  //       path: '/main/users-data/accomodation-data',
  //       exact: false,
  //       component: <Accomodation />,
  //     },
  //   ],
  // },
];

export default routes;
