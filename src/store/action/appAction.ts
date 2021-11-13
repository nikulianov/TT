
import { AppAction, IUser} from '../types/appTypes'
import {Dispatch} from 'react'

export const setCheckAuth = () => async (dispatch: Dispatch<AppAction>) => {
  // const sID = getCookie('token')
  // if (sID) {
  //   try {
  //     const {data} = await UserApi.setCheckAuth()
  //     setCookie('token', data.token)
  //     const user:IUser = jwt_decode(data.token)
  //     dispatch(SET_USER(user))
  //   } catch (e) {
  //     console.log(e.response.data.message)
  //   }finally {
  //     dispatch(SET_LOADING(false))
  //     dispatch(SET_ISAUTH())
  //   }
  // } else {
  //   dispatch(SET_LOADING(false))
  //   dispatch(SET_ISAUTH())
  // }
}



