import { AppState } from '../types/appTypes'
import { createSlice} from '@reduxjs/toolkit'

const initialState: AppState = {
  user: null,
  loading: true,
  messages: '',
  isAuth: false,
  error: false
}


export const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    SET_USER: (state, action) => {
      state.user = action.payload
    },
    SET_ERROR: (state, action) => {
      state.error = action.payload
    },
    SET_LOADING: (state, action) => {
      state.loading = action.payload
    },
    SET_MESSAGES: (state, action) => {
      state.messages = action.payload
    },
    SET_ISAUTH: (state) => {
      state.isAuth = true
    }
  }
})

export const { SET_USER, SET_ERROR, SET_LOADING, SET_MESSAGES, SET_ISAUTH } = appReducer.actions


export default appReducer.reducer
