import { memo } from 'react'
import {
  Card, CardMedia, Typography, Box,
} from '@mui/material'

import ActivePitchActions from 'components/Pitches/Actions'
import PitchDetails from 'components/Pitches/Details'

import { imgProps, fulfilledTagProps, charityProps } from './props'

const FullfilledPitch = ({ charity = false, pitch }) => (
  <Card sx={{ bgcolor: '#000000c2', mb: 2 }}>
    <Box style={{ position: 'relative' }}>
      <CardMedia {...imgProps(pitch.receiver.avatar, 'Active Pitch')} />
      <Box sx={{ position: 'absolute', top: charity ? '10%' : '80%' }}>
        <Typography {...fulfilledTagProps}>✅ Fullfilled</Typography>
        {charity && (<Typography {...fulfilledTagProps}><Box {...charityProps} /> Charity</Typography>)}
      </Box>
    </Box>
    <PitchDetails msg={pitch.message} id={pitch.id} />
    <ActivePitchActions />
  </Card>
)

export default memo(FullfilledPitch)
