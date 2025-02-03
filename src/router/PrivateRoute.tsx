import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  role: 'admin' | 'user'
  children: React.ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ role, children }) => {
  const { user } = useSelector((state: RootState) => state.auth)

  if (!user || user.role !== role) {
    return <Navigate to="/sign-in" />
  }

  return <>{children}</>
}

export default PrivateRoute
