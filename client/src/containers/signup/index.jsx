import { useState } from 'react'
import { Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import {
  AlertModal, AuthActions, AuthLogo, EmailAndPass,
} from 'components'
import { Checkbox } from 'layouts'

import { signup } from 'api/auth'

import { formProps, checkboxProps } from './props'

const Signup = ({ user, setUser }) => {
  const { email, password } = user
  const [error, setError] = useState('')
  const redirect = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    const { status, msg } = await signup(email, password)
    if (status === 'error') {
      setError(msg)
    } else {
      redirect('/login')
    }
  }

  const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value })

  return (
    <>
      <AuthLogo />
      <Stack {...formProps} onSubmit={handleSubmit}>
        <Typography variant='h4' color='white' marginX='auto'>Get started today!</Typography>
        <EmailAndPass email={email} pass={password} onChange={handleChange} />
        <Checkbox {...checkboxProps} />
        <AuthActions />
        {error?.length > 0 && <AlertModal info={error} clearError={setError} />}
      </Stack>
    </>
  )
}

export default Signup
