import AdminDashboard from '@/pages/admin/AdminDashboard/AdminDashboard'
import ProductCreate from '@/pages/admin/product/ProductCreate'
import ProductList from '@/pages/admin/product/ProductList'
import ProductUpdate from '@/pages/admin/product/ProductUpdate'

export const adminPaths = [
  { path: 'dashboard', element: <AdminDashboard /> },
  { path: '/admin/product-list', element: <ProductList /> },
  { path: '/admin/product-create', element: <ProductCreate /> },
  { path: '/admin/product-edit/:id', element: <ProductUpdate /> },
]
