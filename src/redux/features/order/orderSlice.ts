import { baseApi } from '@/redux/api/baseApi'
import { useAppSelector } from '@/redux/hooks'
import { RootState } from '@/redux/store'

interface OrderData {
  id: string
  product: string
  quantity: number
  price: number
}

export const useAddOrder = () => {
  const token = useAppSelector((state: RootState) => state.auth.token)
  console.log(token)
  const [addOrder, result] = useAddOrderMutation()
  const addOrderWithToken = (orderData: OrderData) =>
    addOrder({ orderData, token })
  return [addOrderWithToken, result]
}

const ordersApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    gettAllOrders: builder.query({
      query: () => ({
        url: '/orders',
        method: 'GET',
      }),
      providesTags: ['Order'],
    }),
    addOrder: builder.mutation({
      query: ({ orderData, token }) => ({
        url: '/orders/add',
        method: 'POST',
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      }),
      invalidatesTags: ['Order'],
    }),
    getSingleOrderById: builder.query({
      query: id => ({
        url: `/orders/${id}`,
        method: 'GET',
      }),
      providesTags: ['Order'],
    }),
    updateOrder: builder.mutation({
      query: ({ id, data }) => ({
        url: `/orders/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Order'],
    }),
    deleteOrder: builder.mutation({
      query: id => ({
        url: `/orders/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Order'],
    }),
  }),
})

export const {
  useGettAllOrdersQuery,
  useAddOrderMutation,
  useGetSingleOrderByIdQuery,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
} = ordersApi
