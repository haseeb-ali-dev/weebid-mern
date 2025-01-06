// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'
import { TOKEN } from 'utils/constants'

export const saveToken = token => localStorage.setItem(TOKEN, JSON.stringify(token))

export const getToken = () => JSON.parse(localStorage.getItem(TOKEN))

export const removeToken = () => localStorage.removeItem(TOKEN)

export const decodeJwt = () => (getToken() ? jwt_decode(getToken()) : { user: null })

export const id = () => {
  const { user: { id: userId } } = decodeJwt()
  return userId
}

export const getMsg = error => error?.response?.data?.msg

export const calculatePledged = pledges => {
  let total = 0
  pledges?.forEach(({ cents }) => total += cents)
  return total
}

export const getOrdinal = n => {
  let ord = 'th'
  if (n % 10 === 1 && n % 100 !== 11) {
    ord = 'st'
  } else if (n % 10 === 2 && n % 100 !== 12) {
    ord = 'nd'
  } else if (n % 10 === 3 && n % 100 !== 13) {
    ord = 'rd'
  }
  return n + ord
}

export const getContributerEmoji = n => {
  switch (n) {
    case 1:
      n = '🥇'
      break
    case 2:
      n = '🥈'
      break
    case 3:
      n = '🥉'
      break
    default:
      n = null
      break
  }
  return n
}
