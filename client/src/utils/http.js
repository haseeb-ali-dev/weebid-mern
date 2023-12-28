import axios from 'axios'
import { getToken } from './helpers'

const token = getToken()

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: 'application/json',
    'x-access-token': token ?? null,
  },
})
