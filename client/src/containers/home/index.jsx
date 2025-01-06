import { Box, Stack } from '@mui/material'
import { Banners, HomePitches } from 'components'

const Home = () => (
  <Stack spacing={2}>
    <Banners />
    <Box px={{ md: 10, sm: 3 }}>
      <HomePitches />
    </Box>
  </Stack>
)

export default Home
