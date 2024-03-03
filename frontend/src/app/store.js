import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import recipeReducer from '../features/goals/goalSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    recipes: recipeReducer,
  },
})
