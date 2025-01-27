import AdminDashboard from '@/pages/admin/AdminDashboard/AdminDashboard'
import ProductCreate from '@/pages/admin/product/ProductCreate'
import ProductList from '@/pages/admin/product/ProductList'

export const adminPaths = [
  { path: 'dashboard', element: <AdminDashboard /> },
  { path: '/admin/product-list', element: <ProductList /> },
  {path: '/admin/product-create',element: <ProductCreate />,},
]
