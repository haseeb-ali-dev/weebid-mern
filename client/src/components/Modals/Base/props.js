export const dialogProps = Transition => ({
  keepMounted: true,
  'aria-describedby': 'alert-dialog-slide-description',
  fullWidth: true,
  sx: {
    width: {
      md: '550px',
    },
    m: 'auto',
  },
  TransitionComponent: Transition,
})

export const dialogActionsProps = {
  sx: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
}

export const dividerProps = {
  sx: {
    borderTop: '1px solid #7b7b7b',
  },
  flexItem: true,
}

export const cancelBtnProps = {
  sx: {
    p: 0,
    color: '#7b7b7b',
    fontSize: '20px',
    '&:hover': { bgcolor: 'transparent' },
  },
  fullWidth: true,
}
