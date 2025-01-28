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
import ShopPage from '@/pages/ui/ShopPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/shop', element: <ShopPage /> },
    ],
  },

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
