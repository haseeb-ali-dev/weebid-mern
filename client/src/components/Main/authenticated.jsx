import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { decodeJwt } from 'utils/helpers'

const Authenticated = ({ children }) => {
  const navigate = useNavigate()
  const decoded = decodeJwt()
  useEffect(() => {
    if (decoded.user) {
      navigate(-1)
    }
  })
  return children
}

export default Authenticated
