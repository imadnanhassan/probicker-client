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
  user: null,
  token: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload
      console.log(action.payload)
      state.user = user
      state.token = token
      console.log('user', action)
    },
    logout: state => {
      state.user = null
      state.token = null
      localStorage.removeItem('token')
    },
  },
})

export const { setUser, logout } = authSlice.actions

export default authSlice.reducer

export const useCurrentToken = (state: RootState) => state.auth.token
export const selectCurrentUser = (state: RootState) => state.auth.user
