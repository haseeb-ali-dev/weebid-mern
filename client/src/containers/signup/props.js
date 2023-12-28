export const checkboxProps = {
  label: "I agree to Pitch's Terms of Service & Privacy Policy",
  name: 'terms',
  required: true,
  sx: {
    marginRight: -1,
    '&': {
      color: '#f8b500 !important',
    },
  },
}

export const formProps = {
  spacing: 2,
  sx: {
    width: {
      sm: '60%',
      md: '50%',
      lg: '500px',
      xs: '100px',
    },
    marginInline: 'auto',
    marginTop: '30px',
    minWidth: 'fit-content',
    padding: '30px 35px',
    backgroundColor: '#313131',
    borderRadius: '30px',
  },
  component: 'form',
  autoComplete: 'off',
}
