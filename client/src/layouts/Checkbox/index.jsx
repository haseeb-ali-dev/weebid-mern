import {
  FormControlLabel, Checkbox, FormGroup, Typography,
} from '@mui/material'

export default ({
  label = 'Approve', required = false, checked = false, onChange = null, name, sx,
}) => (
  <FormGroup>
    <FormControlLabel
      sx={{ color: 'white' }}
      control={
        <Checkbox
          defaultChecked={checked}
          onChange={onChange}
          required={required}
          name={name}
          sx={{ ...sx }}
        />
      }
      label={<Typography mx='10px'>{label}</Typography>}
    />
  </FormGroup>
)
