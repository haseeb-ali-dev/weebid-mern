import { Link } from 'react-router-dom'

export const makePitchProps = user => ({
  id: 'theme-btn-bold',
  component: Link,
  to: `/ask/user/${user.id}`,
  state: { name: user.name, avatar: user.avatar },
  sx: {
    width: '100%',
    mt: '15px',
    height: '45px',
  },
})

export const threeDotsProps = {
  sx: {
    color: 'white',
    bgcolor: '#000000c2',
    mr: '10px',
    '&:hover': {
      bgcolor: '#000000c2',
      color: '#f8b500',
    },
  },
}

export const nameAndActionsProps = {
  sx: {
    display: 'flex',
    position: 'absolute',
    top: '88%',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
}

export const imageProps = image => ({
  image,
  style: {
    height: '379px',
  },
  component: 'img',
  title: 'Profile Image',
  alt: 'Profile Image',
})

export const profileImgCard = {
  sx: {
    flexGrow: 1,
    background: 'linear-gradient(180deg, transparent -8.66%, rgba(0, 0, 0, 0.58))',
  },
}
