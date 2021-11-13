import axios from 'axios'
import {getCookie} from '../utils/getCookie'

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

const authIntercepter = config => {
  const cookie = getCookie('token')
  config.headers.authorization = `Bearer ${cookie}`
  return config
}

$authHost.interceptors.request.use(authIntercepter)

export {
  $host, $authHost
}

export const UserApi = {
  setRegistration: (name, email, password) => {
	return $host.post('api/user/registration', {name, email, password, role: 'ADMIN'})
  },
  setLogin: (email, password) => {
	return $host.post('api/user/login', {email, password})
  },
  setCheckAuth: () => {
	return $authHost.get('api/user/check')
  },
}

export const PostApi = {
  getPosts: ()=>{
    return $host.get('api/posts')
  }
}