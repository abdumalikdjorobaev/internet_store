import { configureStore } from '@reduxjs/toolkit'

import auth from './slices/auth'
import products from './slices/products'
import category from './slices/categories'
import trash from './slices/trash'
import users from './slices/users'

export const store = configureStore({
  reducer: {
    auth,
    products,
    category,
    trash,
    users,
  },
})