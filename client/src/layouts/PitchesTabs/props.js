export const tabsProps = tabIndex => ({
  value: tabIndex,
  TabIndicatorProps: {
    sx: {
      display: 'none',
    },
  },
  sx: {
    width: 'fit-content',
    m: 'auto',
    borderRadius: '7px',
    border: '1px solid #7b7b7b',
    '& button': {
      bgcolor: '#292626',
      color: '#949292',
      px: '30px',
      fontSize: 'clamp(14px, 4vw, 20px)',
      fontWeight: '700',
      letterSpacing: '1px',
    },
    '& button.Mui-selected': {
      bgcolor: '#f8b500',
      color: 'white',
    },
  },
})
