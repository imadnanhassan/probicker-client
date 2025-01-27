import { baseApi } from '@/redux/api/baseApi'

const productApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    gettAllProduct: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
      providesTags: ['Product'],
    }),

    addProduct: builder.mutation({
      query: data => ({
        url: '/products/add',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Product'],
    }),
  }),
})

export const { useGettAllProductQuery, useAddProductMutation } = productApi
