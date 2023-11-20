import { Icon } from '@chakra-ui/react';
import { FaWpforms } from 'react-icons/fa';

// Admin Imports
import UsersContactedFormSubmitted from 'views/admin/main/users/overview/usersFormSubmitted';
import UsersUnContactedFormSubmitted from 'views/admin/main/users/overview/usersUnContactedFormSubmitted';
import UsersContactedConsultationFormSubmitted from 'views/admin/main/users/overview/usersContactedConsultationFormSubmitted';
import UsersUnContactedConsultationFormSubmitted from 'views/admin/main/users/overview/usersUnContactedConsultationFormSubmitted';

const routes = [
  // {
  //   name: 'Users Data',
  //   layout: '/admin',
  //   path: '/main/users/users-data',
  //   component: <UsersFormSubmitted />,
  //   icon: <Icon as={FaWpforms} width="20px" height="20px" color="inherit" />,
  // },
  {
    name: 'Submitted Data',
    path: '/main/users',
    icon: <Icon as={FaWpforms} width="20px" height="20px" color="inherit" />,
    collapse: true,
    items: [
      {
        name: 'Contacted Users',
        layout: '/admin',
        path: '/main/users/contacted-users-data',
        exact: false,
        component: <UsersContactedFormSubmitted />,
      },
      {
        name: 'Un Contacted Users',
        layout: '/admin',
        path: '/main/users/un-contacted-data',
        exact: false,
        component: <UsersUnContactedFormSubmitted />,
      },
    ],
  },
  // // --- Form Submitted By the Users ---
  {
    name: 'Users Consultations',
    path: '/main/consultation',
    icon: <Icon as={FaWpforms} width="20px" height="20px" color="inherit" />,
    collapse: true,
    items: [
      {
        name: 'Contacted Users',
        layout: '/admin',
        path: '/main/consultation/contacted-users-data',
        exact: false,
        component: <UsersContactedConsultationFormSubmitted />,
      },
      {
        name: 'Un Contacted Users',
        layout: '/admin',
        path: '/main/consultation/uncontacted-users-data',
        exact: false,
        component: <UsersUnContactedConsultationFormSubmitted />,
      },
    ],
  },
];

export default routes;
