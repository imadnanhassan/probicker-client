import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export interface ICartItem {
  product: string // Product ID
  name: string
  model: string
  brand: string
  price: number
  quantity: number
  inStock: boolean
  description: string
  imageUrl: string
}

interface CartState {
  items: ICartItem[]
  totalQuantity: number
  totalPrice: number
}

const loadCartFromLocalStorage = (): CartState => {
  const savedCart = localStorage.getItem('cart')
  if (savedCart) {
    const parsedCart = JSON.parse(savedCart)
    // Ensure parsedCart has the correct structure
    if (Array.isArray(parsedCart.items)) {
      return parsedCart
    }
  }
  // Return default structure if nothing is found
  return {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  }
}

const saveCartToLocalStorage = (cart: CartState) => {
  localStorage.setItem('cart', JSON.stringify(cart))
}

const initialState = loadCartFromLocalStorage()

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
     const existingItem = state.items.find(
       item => item.product === action.payload.product,
     )

     // Check if the item already exists in the cart
     if (existingItem) {
       // Add the clicked quantity (action.payload.quantity) to the existing quantity
       existingItem.quantity += action.payload.quantity
     } else {
       // Add new item if it doesn't exist
       state.items.push(action.payload)
     }

     // Update total quantity and total price
     state.totalQuantity += action.payload.quantity
     state.totalPrice += action.payload.price * action.payload.quantity

     // Save updated cart to localStorage
     saveCartToLocalStorage(state)
    },

    removeFromCart(state, action: PayloadAction<string>) {
      const itemId = action.payload
      const existingItem = state.items.find(item => item.product === itemId)
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity
        state.totalPrice -= existingItem.price * existingItem.quantity
        state.items = state.items.filter(item => item.product !== itemId)

        saveCartToLocalStorage(state) // Save updated cart to localStorage
      }
    },

    updateQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>,
    ) {
      const { id, quantity } = action.payload
      const existingItem = state.items.find(item => item.product === id)
      if (existingItem && quantity > 0) {
        const quantityDifference = quantity - existingItem.quantity
        existingItem.quantity = quantity
        state.totalQuantity += quantityDifference
        state.totalPrice += quantityDifference * existingItem.price

        saveCartToLocalStorage(state) // Save updated cart to localStorage
      }
    },

    incrementQuantity(state, action: PayloadAction<string>) {
      const existingItem = state.items.find(
        item => item.product === action.payload,
      )
      if (existingItem && existingItem.inStock) {
        existingItem.quantity += 1
        state.totalQuantity += 1
        state.totalPrice += existingItem.price

        saveCartToLocalStorage(state) // Save updated cart to localStorage
      }
    },

    decrementQuantity(state, action: PayloadAction<string>) {
      const existingItem = state.items.find(
        item => item.product === action.payload,
      )
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1
        state.totalQuantity -= 1
        state.totalPrice -= existingItem.price

        saveCartToLocalStorage(state) // Save updated cart to localStorage
      }
    },

    clearCart(state) {
      state.items = []
      state.totalQuantity = 0
      state.totalPrice = 0

      saveCartToLocalStorage(state) // Save updated cart to localStorage
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions

export const selectCartItems = (state: RootState) => state.cart.items
export const selectCartTotal = (state: RootState): number =>
  state.cart.items.reduce(
    (total: number, item: ICartItem) => total + item.price * item.quantity,
    0,
  )

export default cartSlice.reducer
