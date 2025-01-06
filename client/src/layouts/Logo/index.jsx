import { Box } from '@mui/material'
import { memo } from 'react'

import logo from 'assets/logo.svg'

const Logo = memo(() => (
  <Box component='img' alt='Logo' src={logo} />
))

export default Logo
