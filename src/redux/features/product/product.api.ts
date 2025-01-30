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
    getSingleProductById: builder.query({
      query: id => ({
        url: `/products/${id}`,
        method: 'GET',
      }),
      providesTags: ['Product'],
    }),




    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Product'],
      transformResponse: (response, meta: { response?: { status?: number } }) => {
        const status = meta?.response?.status 
        if (status && status >= 200 && status < 300) {
          return response
        } else {
          const errorData: { message: string; status?: number } = {
            message: 'Failed to update product',
            ...response,
          };

          if (status) {
            errorData.status = status;
          }
          throw { status, data: errorData } 
        }
      },
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
  useGetSingleProductByIdQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productApi
