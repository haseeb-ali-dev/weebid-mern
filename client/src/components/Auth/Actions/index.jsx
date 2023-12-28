import { Link } from 'react-router-dom'
import { Button, Divider, Typography } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/FacebookOutlined'

import {
  socialBtnsSx, googleBtnSx, fbBtnSx, orSx, createAccountSx, dividerSx, notUserSx,
} from './props'

const AuthActions = ({ login }) => (
  <>
    <Button variant='contained' id='theme-btn' type='submit' sx={{ ...socialBtnsSx, mt: !login && '1px !important' }}>
      {login ? 'Sign In' : 'Sign Up'}
    </Button>
    <Typography sx={orSx}>-Or-</Typography>
    <Button variant='contained' startIcon={<GoogleIcon />} sx={googleBtnSx}>
      Continue with Google
    </Button>
    <Button variant='contained' startIcon={<FacebookIcon />} sx={fbBtnSx}>
      Continue with Facebook
    </Button>
    <Divider sx={dividerSx} />
    {login ? (
      <Typography sx={notUserSx}>Not yet a user?
        <Typography component={Link} to='/create-account' sx={createAccountSx}>Create an account</Typography>
      </Typography>
    ) : (
      <Typography sx={notUserSx}>Have an account?
        <Typography component={Link} to='/login' sx={createAccountSx}>Login</Typography>
      </Typography>
    )}
  </>
)

export default AuthActions
