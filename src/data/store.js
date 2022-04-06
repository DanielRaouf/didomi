import { configureStore } from '@reduxjs/toolkit'
import ConsentsReducer from './consents/slice'
import UsersConsentsReducer from './users-consents/slice'

export const store = configureStore({
  reducer: {
    consents: ConsentsReducer,
    usersConsents: UsersConsentsReducer
  }
})