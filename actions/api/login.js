import Cookies from 'js-cookie'
import { mFetch, } from '../dynamicAction'
import { consoleLog, } from '../../utils/config'

export const logout = (refreshToken) => {
  return (dispatch) => {
    return dispatch(mFetch(`/logout`, 'LOGOUT', 'POST'))
  }
}

export const login = (token, username, password, ) => {
  return (dispatch) => {
    return dispatch(mFetch(`/login`, 'LOGIN', 'POST', false, {
      username,
      password,
    }))
  }
}
