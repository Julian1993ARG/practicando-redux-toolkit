import { createSlice } from '@reduxjs/toolkit'

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    character: [],
    details: {}
  },
  reducers: {
    getAllCharacters: (state, action) => {
      state.character = action.payload
    },
    getCharById: (state, action) => {
      state.details = action.payload
    }
  }
})

export const { getAllCharacters, getCharById } = charactersSlice.actions
export default charactersSlice.reducer
