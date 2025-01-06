export const makePledgeBtnProps = {
  id: 'theme-btn-bold',
  sx: {
    borderRadius: '8px',
    px: 5,
    py: 1.5,
    mt: 3,
    '&:hover': {
      bgcolor: '#131313 !important',
      border: '1px solid #f8b500',
    },
  },
}

export const actionBtnProps = {
  sx: {
    border: '1px solid #8e8d8d',
    borderRadius: '24px',
    color: '#8e8d8d',
    height: '46px',
    minWidth: '46px',
    px: 2,
    mr: 2,
    mb: 2,
    '&:hover': {
      color: 'white',
      bgcolor: '#7B7B7B',
    },
  },
}

export const deleteBtnProps = {
  sx: {
    border: '1px solid red',
    borderRadius: '24px',
    color: 'red',
    height: '46px',
    minWidth: '46px',
    px: 2,
    mr: 2,
    mb: 2,
    '&:hover': {
      color: 'white',
      bgcolor: '#de1738',
    },
  },
}
