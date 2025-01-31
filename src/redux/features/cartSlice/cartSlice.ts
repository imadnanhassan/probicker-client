import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/redux/store'

export interface CartItem {
  _id: number 
  id: string
  name: string
  price: number
  quantity: number
  imageUrl: string
  model: string
  totalPrice?: number
}

const loadCartFromLocalStorage = (): CartItem[] => {
  const storedCart = localStorage.getItem('cart')
  return storedCart ? JSON.parse(storedCart) : []
}

interface CartState {
  cart: CartItem[]
}

const initialState: CartState = {
  cart: loadCartFromLocalStorage(),
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cart.find(
        item => item._id === action.payload._id,
      )
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    incrementItem: (state, action: PayloadAction<number>) => {
      const item = state.cart.find(item => item._id === action.payload)
      if (item) {
        item.quantity += 1
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    decrementItem: (state, action: PayloadAction<number>) => {
      const item = state.cart.find(item => item._id === action.payload)
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1
        } else {
          state.cart = state.cart.filter(item => item._id !== action.payload)
        }
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    removeItem: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(item => item._id !== action.payload)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
  },
})

export const { addToCart, incrementItem, decrementItem, removeItem } =
  cartSlice.actions

export const selectCartItems = (state: RootState) => state.cart.cart
export const selectCartTotal = (state: RootState) =>
  state.cart.cart.reduce((total, item) => total + item.price * item.quantity, 0)

export default cartSlice.reducer
