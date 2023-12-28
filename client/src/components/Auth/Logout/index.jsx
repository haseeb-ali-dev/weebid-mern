import { useNavigate } from 'react-router-dom'
import { MenuItem } from '@mui/material'
import { MeetingRoom } from '@mui/icons-material'

import { removeToken } from 'utils/helpers'

const Logout = ({ closeMenu, iconProps, btnSx }) => {
  const redirect = useNavigate()

  const logout = () => {
    closeMenu()
    removeToken()
    redirect('/login')
  }

  return <MenuItem onClick={logout} sx={btnSx}><MeetingRoom {...iconProps} />Logout</MenuItem>
}

export default Logout
