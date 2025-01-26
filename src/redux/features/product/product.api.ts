import { baseApi } from '@/redux/api/baseApi'

const productApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    gettAllProduct: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
    }),
  }),
})

export const { useGettAllProductQuery } = productApi
