import { memo } from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import { ChatBubbleOutline, SignalCellularAlt, TaskAlt } from '@mui/icons-material'

const PitchBanner = memo(() => (
  <Grid
    container
    sx={{
      minHeight: '215px',
      display: 'flex',
      placeItems: 'center',
      background: 'linear-gradient(266.84deg, rgba(114, 106, 164, 0.45) 13.49%, rgba(90, 187, 162, 0.45) 100%)',
      color: '#F0F0F0 ',
      p: '1em clamp(1em, 2vw, 3em)',
    }}
  >
    <Grid item sm={12} md={4} p={2}>
      <Stack direction='row' alignItems='center' gap={1}>
        <ChatBubbleOutline sx={{ fontSize: '66px' }} />
        <Typography fontSize='clamp(16px, 2vw, 24px)'> Pitch any idea to your favorite creator</Typography>
      </Stack>
    </Grid>
    <Grid item sm={12} md={4} p={2}>
      <Stack direction='row' alignItems='center' gap={1}>
        <SignalCellularAlt sx={{ fontSize: '66px' }} />
        <Typography fontSize='clamp(16px, 2vw, 24px)'> Make a pledge to help pitches reach their funding goal</Typography>
      </Stack>
    </Grid>
    <Grid item sm={12} md={4} p={2}>
      <Stack direction='row' alignItems='center' gap={1}>
        <TaskAlt sx={{ fontSize: '66px' }} />
        <Typography fontSize='clamp(16px, 2vw, 24px)'> You’re never charged unless a creator fulfills a pitch</Typography>
      </Stack>
    </Grid>
  </Grid>
))

export default PitchBanner
