import charityIcon from 'assets/charity.png'

export const fulfilledTagProps = {
  variant: 'inherit',
  sx: {
    color: 'white',
    ml: '10px',
    bgcolor: '#363130eb',
    fontWeight: 600,
    padding: '6px 12px',
    borderRadius: '8px',
    letterSpacing: 1.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    mt: 1,
  },
}

export const imgProps = (image, name) => ({
  component: 'img',
  height: '215',
  image,
  onError: e => e.target.src = `https://via.placeholder.com/215/000000/FFFFFF/?text=${name}`,
})

export const charityProps = {
  component: 'img',
  src: charityIcon,
}
