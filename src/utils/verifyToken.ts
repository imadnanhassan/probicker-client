// import { jwtDecode } from 'jwt-decode'

// export const verifyToken = (token: string) => {
//   return jwtDecode(token)
// }

import { jwtDecode } from 'jwt-decode'

export const verifyToken = (token: string) => {
  if (!token || typeof token !== 'string') {
    console.error('Invalid token')
    return null 
  }
 
 
  try {
    interface DecodedToken {
      userId: string;
      role: string;
      name: string
      // add other properties as needed
    }

    const decoded: DecodedToken = jwtDecode(token) 
    return decoded 
  } catch (error) {
    console.error('Error decoding token', error)
    return null
  }
}