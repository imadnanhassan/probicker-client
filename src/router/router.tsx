import AdminLayout from '@/layout/adminLayout'
import RootLayout from '@/layout/rootLayout'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import HomePage from '@/pages/ui/HomePage'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [{ path: '/', element: <HomePage /> }],
  },
  {
    path: '/admin/',
    element: <AdminLayout />,
    children: [
      {
       
        index: true,
        element: <>Overviesw</>,
      },
    ],
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
