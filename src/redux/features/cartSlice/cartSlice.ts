import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/redux/store'

interface CartItem {
  _id: number
  name: string
  price: number
  quantity: number
  imageUrl: string
  model: string
  totalPrice?: number
}

const initialState = {
  items: [] as CartItem[],
}

const saveCartToLocalStorage = (items: CartItem[]) => {
  localStorage.setItem('cart', JSON.stringify(items))
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart or update quantity
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find(
        item => item._id === action.payload._id,
      )

      if (existingItem) {
        existingItem.quantity += action.payload.quantity
        existingItem.totalPrice = existingItem.price * existingItem.quantity // Update price
      } else {
        state.items.push({
          ...action.payload,
          totalPrice: action.payload.price * action.payload.quantity,
        })
      }

      saveCartToLocalStorage(state.items)
    },

    // Remove item from cart
    removeFromCart(state, action: PayloadAction<number | string>) {
      state.items = state.items.filter(item => item._id !== action.payload)
      saveCartToLocalStorage(state.items)
    },

    // Increment/Decrement item quantity
    updateQuantity(
      state,
      action: PayloadAction<{ id: number | string; quantity: number }>,
    ) {
      const existingItem = state.items.find(
        item => item._id === action.payload.id,
      )

      if (existingItem) {
        existingItem.quantity = Math.max(1, action.payload.quantity) // Prevent quantity < 1
        existingItem.totalPrice = existingItem.price * existingItem.quantity // Update price
      }

      saveCartToLocalStorage(state.items)
    },

    // Clear the cart
    clearCart(state) {
      state.items = []
      saveCartToLocalStorage(state.items)
    },
  },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions

export const selectCartItems = (state: RootState) => state.cart.items
export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

export default cartSlice.reducer
