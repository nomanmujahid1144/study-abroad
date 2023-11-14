import { Icon } from '@chakra-ui/react';
import { FaWpforms } from 'react-icons/fa';

// Admin Imports
import UsersFormSubmitted from 'views/admin/main/users/overview/usersFormSubmitted';

const routes = [
  {
    name: 'Users Data',
    layout: '/admin',
    path: '/main/users/users-data',
    component: <UsersFormSubmitted />,
    icon: <Icon as={FaWpforms} width="20px" height="20px" color="inherit" />,
  },
];

export default routes;
