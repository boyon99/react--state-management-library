import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  entities: [],
  loading: false
}

export const getPosts = createAsyncThunk('post/getPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return response.data
})

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => { // post/getPosts/pending
      state.loading = true
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false
      state.entities = action.payload
    },
    [getPosts.rejected]: (state) => {
      state.loading = false
    }
  }
})

export default postSlice.reducer