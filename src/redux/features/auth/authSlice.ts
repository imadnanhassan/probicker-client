import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export type TUser = {
  id: string
  name: string
  role: 'admin' | 'user'
  iat: number
  exp: number
}

type TAuthState = {
  user: TUser | null
  token: string | null
}

const initialState: TAuthState = {
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')!)
    : null,
  token: localStorage.getItem('token') || null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload
      console.log(user, token)
      if (!token) {
        console.error('Token is missing from login response')
        return
      }
      state.user = user
      state.token = token
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
    },
    logout: state => {
      state.user = null
      state.token = null
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    },
  },
})

export const { setUser, logout } = authSlice.actions
export default authSlice.reducer

export const useCurrentToken = (state: RootState) => state.auth.token
export const selectCurrentUser = (state: RootState) => state.auth.user
