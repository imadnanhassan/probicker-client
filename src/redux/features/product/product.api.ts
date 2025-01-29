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
    updateProduct: builder.mutation({
      query: (id, data) => ({
        url: `/products/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Product'],
    }),
    deleteProduct: builder.mutation({
      query: id => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
    }),
  }),
})

export const {
  useGettAllProductQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productApi
