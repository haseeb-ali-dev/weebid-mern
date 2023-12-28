export const tabsProps = value => ({
  value,
  TabIndicatorProps: {
    sx: {
      bgcolor: 'white',
    },
  },
  sx: {
    '& button': {
      color: '#949292',
      p: 0,
      mr: '30px',
      fontSize: 'clamp(14px, 4vw, 20px)',
      fontWeight: '700',
      letterSpacing: '1px',
    },
    '& button.Mui-selected': {
      color: 'white',
    },
  },
})

export const moreBtnProps = {
  sx: {
    p: '0.6em 2em',
    border: '2px solid #7B7B7B',
    color: '#7B7B7B',
    fontSize: '17px',
    borderRadius: '8px',
  },
}
