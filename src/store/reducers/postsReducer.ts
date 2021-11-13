import { PostsState} from '../types/postsTypes'

import { createSlice} from '@reduxjs/toolkit'

const initialState: PostsState = {
  posts: null,
  loading: false,
  error: null
}

export const postsReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    SET_POSTS: (state, action) => {
      state.posts = action.payload
    },

  }
})

export const { SET_POSTS } = postsReducer.actions


export default postsReducer.reducer
