import {
  Switch, FormGroup, FormControlLabel,
} from '@mui/material'

export default ({
  checked = false, onChange = null, label = '', sx,
}) => (
  <FormGroup>
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={onChange}
          sx={sx}
        />
      }
      label={label}
    />
  </FormGroup>
)
