import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/redux/store'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

interface CartState {
  items: CartItem[]
}

const loadCartFromLocalStorage = (): CartItem[] => {
  const storedCart = localStorage.getItem('cartItems')
  if (storedCart) {
    return JSON.parse(storedCart)
  }
  return []
}

const saveCartToLocalStorage = (cartItems: CartItem[]) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

const initialState: CartState = {
  items: loadCartFromLocalStorage(),
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find(
        item => item.id === action.payload.id,
      )
      if (existingItem) {
        existingItem.quantity += action.payload.quantity
      } else {
        state.items.push(action.payload)
      }

      saveCartToLocalStorage(state.items)
    },

    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload)
      saveCartToLocalStorage(state.items)
    },

    updateQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>,
    ) {
      const existingItem = state.items.find(
        item => item.id === action.payload.id,
      )
      if (existingItem) {
        existingItem.quantity =
          action.payload.quantity > 0 ? action.payload.quantity : 1
      }
      saveCartToLocalStorage(state.items)
    },

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
