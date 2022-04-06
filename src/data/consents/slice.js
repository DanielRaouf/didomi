import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: null,
}

export const consentsSlice = createSlice({
  name: 'consents',
  initialState,
  reducers: {
    set: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.list = action.payload
    },
    clear: (state, action) => {
      state.list = []
    },
    update: (state, action) => {
      state.list = state.list.map((item) => item.id === action.payload.id ? action.payload : item)
    },
    remove: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload.id)
    },
    create: (state, action) => {
      state.list.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { set, create, update, remove, clear } = consentsSlice.actions

export default consentsSlice.reducer