import { baseApi } from '../../api/baseApi'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: userInfo => ({
        url: '/auth/login',
        method: 'POST',
        body: userInfo,
      }),
      transformResponse: (response: {
        success: boolean
        message: string
        data?: { token: string; user: { id: string; name: string; email: string } }
      }) => {
        if (!response.data || !response.data.token) {
          throw new Error('Invalid login response: Token missing')
        }
        return response.data
      },
    }),
    register: builder.mutation({
      query: userInfo => ({
        url: '/auth/register',
        method: 'POST',
        body: userInfo,
      }),
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation } = authApi
