import { FormControl, InputLabel, InputBase } from '@mui/material'
import { styled } from '@mui/material/styles'

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(4),
  },
  '& .MuiInputBase-input': {
    borderRadius: '8px',
    backgroundColor: 'transparent',
    border: '1px solid #686868',
    color: '#f3f3f3',
    fontSize: 16,
    width: '100%',
    padding: '10px 12px',
    '&:focus': {
      boxShadow: '0 0 0 0.25rem rgb(13 110 253 / 25%)',
    },
  },
}))

const labelSx = {
  fontSize: 20,
  color: 'white',
  '&': {
    color: 'white !important',
  },
}

const Input = ({
  label, value, name, onChange, type, required = true, sx,
}) => (
  <FormControl variant='standard' sx={sx}>
    <InputLabel shrink sx={labelSx}>
      {label}
    </InputLabel>
    <BootstrapInput
      name={name}
      defaultValue={value}
      onChange={onChange}
      type={type}
      required={required}
      sx={{ borderRadius: '100%' }}
    />
  </FormControl>
)

export default Input
