import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Divider, MenuItem } from '@mui/material'
import {
  Person, EmojiObjectsOutlined, VolunteerActivism, Wallet, HistoryEdu, QuestionMark,
} from '@mui/icons-material'

import { Logout } from 'components'

const iconProps = {
  fontSize: 'small',
  sx: {
    mr: '15px',
    mb: '4px',
  },
}

const sx = {
  color: '#D6D5D5',
  padding: '.4rem 1rem',
  '&:hover': {
    bgcolor: '#e9ecef',
    color: '#1e2125',
  },
}

const Items = memo(({ closeMenu, id }) => [
  <MenuItem key={1} onClick={closeMenu} component={Link} to={`/user/${id}`} sx={sx}><Person {...iconProps} />Profile</MenuItem>,
  <MenuItem key={2} onClick={closeMenu} component={Link} to='/' sx={sx}><EmojiObjectsOutlined {...iconProps} />My Pitches</MenuItem>,
  <MenuItem key={3} onClick={closeMenu} component={Link} to='/' sx={sx}><VolunteerActivism {...iconProps} />My Pledged</MenuItem>,
  <MenuItem key={4} onClick={closeMenu} component={Link} to='/' sx={sx}><Wallet {...iconProps} />Wallet</MenuItem>,
  <MenuItem key={5} onClick={closeMenu} component={Link} to='/' sx={sx}><HistoryEdu {...iconProps} />Terms</MenuItem>,
  <MenuItem key={6} onClick={closeMenu} component={Link} to='/' sx={sx}><QuestionMark {...iconProps} />Help</MenuItem>,
  <Divider key={7} color='#666666' />,
  <Logout key={8} closeMenu={closeMenu} btnSx={sx} iconProps={iconProps} />,
])

export default Items
