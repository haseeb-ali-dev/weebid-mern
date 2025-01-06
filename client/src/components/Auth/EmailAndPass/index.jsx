import { Input } from 'layouts'

const EmailAndPass = ({ email, pass, onChange = null }) => (
  <>
    <Input
      value={email}
      onChange={onChange}
      type='email'
      name='email'
      label='Email'
    />
    <Input
      value={pass}
      onChange={onChange}
      type='password'
      name='password'
      label='Password'
      sx={{ mt: '1.5rem !important' }}
    />
  </>
)

export default EmailAndPass
