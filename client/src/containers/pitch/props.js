export const imageProps = img => ({
  image: img,
  style: {
    height: 'clamp(400px, 35vw, 600px)',
  },
  component: 'img',
  title: 'Profile Image',
  alt: 'Profile Image',
})

export const msgProps = {
  color: '#d9d9d9',
  mt: 3,
  fontSize: 'clamp(20px, 2vw, 36px)',
  lineHeight: 'clamp(32px, 3vw, 46px)',
}

export const pledgedAmountProps = {
  color: '#5ABBA2',
  mt: 3,
  fontSize: '20px',
}
