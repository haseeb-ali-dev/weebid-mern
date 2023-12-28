import { Box } from '@mui/material'

import logo from 'assets/logo.png'

const logoSx = {
  height: 50,
  width: 145,
}

const AuthLogo = () => (
  <Box display='flex' alignItems='center' justifyContent='center' mt='90px'>
    <Box component='img' sx={logoSx} alt='Logo' src={logo} />
  </Box>
)

export default AuthLogo
