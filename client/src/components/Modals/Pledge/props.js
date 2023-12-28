export const proceedBtnProps = {
  variant: 'contained',
  color: 'warning',
  id: 'theme-btn',
  fullWidth: true,
  sx: {
    p: '10px 14px',
    borderRadius: '8px',
  },
}

export const amountFieldInput = {
  placeholder: '0 USD',
  sx: {
    color: '#f3f3f3',
    m: 'auto',
    width: 'inherit',
    fontSize: '30px',
    border: '1px solid #686868',
    borderRadius: '10px',
    height: '57px',
  },
  startAdornment: '$',
  autoFocus: true,
}

export const pledgeLabelProps = {
  pb: 2,
  pl: 1.1,
  fontWeight: 700,
  fontSize: '16px',
}

export const confirmBtnProps = {
  variant: 'contained',
  sx: {
    bgcolor: '#e14343',
    borderRadius: '8px',
    marginRight: 2,
    '&:hover': {
      bgcolor: 'white',
      color: 'red',
      fontWeight: 400,
    },
  },
}

export const keepBtnProps = {
  variant: 'outlined',
  sx: {
    borderRadius: '8px',
    border: '1px solid grey',
    color: 'grey',
    '&:hover': {
      border: '1px solid grey',
      bgcolor: 'grey',
      color: 'white',
      fontWeight: 400,
    },
  },
}

export const msgProps = {
  color: 'white',
  fontSize: 16,
  textAlign: 'center',
}
