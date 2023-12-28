export const appbarProps = {
  position: 'static',
  sx: {
    height: '65px',
    width: {
      md: '93%',
      sm: '91%',
    },
    mx: 'auto',
  },
}

export const toolbarProps = {
  sx: {
    height: '65px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    bgcolor: '#131313 !important',
  },
}

export const menuProps = anchorEl => ({
  id: 'menu-appbar',
  anchorEl,
  keepMounted: true,
  open: Boolean(anchorEl),
  sx: {
    mt: '10px',
    backdropFilter: 'brightness(0.6)',
  },
})

export const searchProps = {
  'aria-label': 'menu-appbar',
  'aria-haspopup': 'true',
  sx: {
    color: 'white',
    width: '22px',
    height: '22px',
  },
}

export const rightmenuProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: '25px',
}

export const avatarmenuProps = {
  id: 'theme-btn',
  sx: {
    height: '38px',
    ml: '25px',
    borderRadius: 2,
  },
}

export const avatarProps = (src, alt) => ({
  src,
  alt,
  sx: {
    width: 24,
    height: 24,
    ml: 1,
  },
})

export const exploreProps = {
  display: {
    sm: 'none',
    xs: 'none',
    md: 'block',
  },
}
