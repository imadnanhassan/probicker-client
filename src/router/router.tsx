import AdminLayout from '@/layout/adminLayout'
import RootLayout from '@/layout/rootLayout'

import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import HomePage from '@/pages/ui/HomePage'
import { createBrowserRouter } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import { routeGenerator } from '@/utils/routesGenerator'
import { adminPaths } from './admin.routes'
import { customerPaths } from './customer.router'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [{ path: '/', element: <HomePage /> }],
  },
  // {
  //   path: '/admin',
  //   element: <AdminLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <>Overviesw</>,
  //     },
  //     {
  //       path: '/admin/product-list',
  //       element: (
  //         <PrivateRoute role="admin">
  //           <ProductList />
  //         </PrivateRoute>
  //       ),
  //     },
  //     {
  //       path: '/admin/product-create',
  //       element: (
  //         <PrivateRoute role="admin">
  //           <ProductCreate />,
  //         </PrivateRoute>
  //       ),
  //     },
  //   ],
  // },

  {
    path: '/admin/',
    element: (
      <PrivateRoute role="admin">
        <AdminLayout />
      </PrivateRoute>
    ),
    children: routeGenerator(adminPaths),
  },
  {
    path: '/customer',
    element: (
      <PrivateRoute role="customer">
        <AdminLayout />
      </PrivateRoute>
    ),
    children: routeGenerator(customerPaths),
  },

  {
    path: '/sign-in',
    element: <LoginPage />,
  },
  {
    path: '/sign-up',
    element: <RegisterPage />,
  },
])

export default router
