import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store'
import { bindActionCreators } from 'redux'
import ActionCreators from '../store/action'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAction = ()=>{
  return bindActionCreators(ActionCreators, useAppDispatch())
}
