import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'

import {
  AlertModal, AuthActions, AuthLogo, EmailAndPass,
} from 'components'

import { signin } from 'api/auth'

import { formSx, forgotSx } from './props'

const Signin = ({ user, setUser }) => {
  const redirect = useNavigate()
  const [error, setError] = useState('')
  const { email, password } = user

  const handleSubmit = async e => {
    e.preventDefault()
    const { status, msg, data } = await signin(email, password)
    if (status === 'error') {
      setError(msg)
    } else {
      redirect('/', { state: data })
    }
  }

  const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value })

  return (
    <>
      <AuthLogo />
      <Stack spacing={2} sx={formSx} component='form' autoComplete='off' onSubmit={handleSubmit}>
        <Typography variant='h4' color='white' marginX='auto'>Log in to your account</Typography>
        <EmailAndPass email={email} pass={password} onChange={handleChange} />
        <Typography sx={forgotSx}>Forgot Password?</Typography>
        <AuthActions login />
        {error?.length > 0 && <AlertModal info={error} clearError={setError} />}
      </Stack>
    </>
  )
}

export default Signin
