import { Icon } from '@chakra-ui/react';
import { MdHome, MdDashboard } from 'react-icons/md';

// Admin Imports
import DashboardsDefault from 'views/admin/dashboards/default/contentIndex';
import BlogNew from 'views/admin/main/blogs/newBlog';
import AllBlogs from 'views/admin/main/blogs/allBlogs/adminBlogs';

const routes = [
  // --- Dashboards ---
  {
    name: 'Dashboards',
    layout: '/admin',
    path: '/dashboards/default',
    component: <DashboardsDefault />,
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Blogs',
    path: '/main/blogs',
    icon: <Icon as={MdDashboard} width="20px" height="20px" color="inherit" />,
    collapse: true,
    items: [
      {
        name: 'New Blog',
        layout: '/admin',
        path: '/main/blog/new-blog',
        exact: false,
        component: <BlogNew />,
      },
      {
        name: 'Blogs',
        layout: '/admin',
        path: '/main/blog/all-blogs',
        component: <AllBlogs />,
        secondary: true,
      },
    ],
  },
];

export default routes;
