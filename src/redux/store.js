import { configureStore } from '@reduxjs/toolkit'

import auth from './slices/auth'
import products from './slices/products'
import category from './slices/categories'

export const store = configureStore({
  reducer: {
    auth,
    products,
    category,
  },
})