import {PostApi} from '../../api/api'
import {postsActions} from '../types/postsTypes'
import {Dispatch} from 'react'
import { SET_POSTS } from '../reducers/postsReducer'


export const getPosts = () => async (dispatch: Dispatch<postsActions>) => {
  // try {
  //   const {data} = await PostApi.getPosts()
  //   dispatch(SET_POSTS(data))
  // } catch (e) {
  //   console.log(e.response.data.message)
  // }
}
