export const mainBoxProps = {
  sx: {
    mx: 'auto',
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    placeItems: 'center center',
    mt: 4,
    gap: 2,
  },
}

export const pitchTextareaProps = {
  placeholder: 'Play a show in Miami',
  multiline: true,
  rows: 5,
  sx: {
    width: {
      xs: '95%',
      md: '70%',
    },
    border: '2px solid #f8b500',
    borderRadius: '10px',
    '& fieldset': {
      border: 'none',
    },
    '& .css-1k0gmrm-MuiInputBase-root-MuiOutlinedInput-root': {
      fontSize: '1.75rem !important',
      color: 'white !important',
      padding: '32px 24px 16px 16px',
    },
  },
}

export const sendPitchBtnProps = {
  sx: {
    width: {
      xs: '95%',
      md: '70%',
    },
    bgcolor: '#f8b500',
    color: 'black',
    fontWeight: 500,
    '&:hover': {
      bgcolor: '#f8b500',
      color: 'black',
    },
  },
}

export const whatsYourPitchProps = {
  variant: 'inherit',
  color: '#d6d5d5',
  fontSize: '1.75rem',
  mb: '35px',
}

export const pitchForProps = {
  variant: 'inherit',
  color: '#d6d5d5',
  fontSize: '14px',
}

export const influencerNameProps = {
  variant: 'span',
  color: '#f8b500',
  fontSize: '16px',
  ml: '5px',
}
