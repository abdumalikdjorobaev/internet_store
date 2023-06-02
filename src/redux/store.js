import { configureStore } from '@reduxjs/toolkit'

import auth from './slices/auth'
import products from './slices/products'

export const store = configureStore({
  reducer: {
    auth,
    products
  },
})