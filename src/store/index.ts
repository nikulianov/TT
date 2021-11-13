import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
// import appReducer from './reducers/appReducer'
// import postsReducer from './reducers/postsReducer'

const store = configureStore({
  reducer: {
    // app: appReducer,
    // posts: postsReducer
  }
})
export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >
