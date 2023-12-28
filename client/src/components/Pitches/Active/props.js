export const imgProps = (image, name) => ({
  component: 'img',
  height: '215',
  image,
  onError: e => e.target.src = `https://via.placeholder.com/215/000000/FFFFFF/?text=${name}`,
})

export const cardProps = {
  sx: {
    bgcolor: '#000000c2',
    mb: 2,
  },
}
