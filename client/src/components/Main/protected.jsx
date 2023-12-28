import { Navigate } from 'react-router-dom'

import { decodeJwt } from 'utils/helpers'

const Protected = ({ children }) => {
  const decoded = decodeJwt()
  if (!decoded.user) {
    return <Navigate to='/create-account' replace />
  }
  return children
}

export default Protected
