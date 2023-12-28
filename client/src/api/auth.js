import http from 'utils/http'
import { getMsg, saveToken } from 'utils/helpers'

export const signup = (email, password) => http.post('auth/signup', { email, password })
  .then(res => {
    saveToken(res.data.accessToken)
    return { status: 'success', msg: res.data.message }
  })
  .catch(error => ({ status: 'error', msg: getMsg(error) }))

export const signin = (email, password) => http.post('auth/signin', { email, password })
  .then(res => {
    saveToken(res.data.accessToken)
    return { status: 'success', msg: res.data.message }
  })
  .catch(error => ({ status: 'error', msg: getMsg(error) }))
