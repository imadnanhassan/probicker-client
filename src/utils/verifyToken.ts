import { jwtDecode } from 'jwt-decode'
interface DecodedToken {
  userId: string
  role: string
  name: string
  exp: number
}
export const verifyToken = (token: string) => {
  if (!token || typeof token !== 'string') {
    console.error('Invalid token')
    return null
  }

  try {
   const decoded: DecodedToken = jwtDecode(token)
   const expiry = decoded.exp * 1000 
   if (Date.now() > expiry) {
     console.error('Token has expired')
     return null
   }
    return decoded
  } catch (error) {
    console.error('Error decoding token', error)
    return null
  }
}
