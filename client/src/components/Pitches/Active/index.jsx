import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardMedia, Box } from '@mui/material'

import ActivePitchActions from 'components/Pitches/Actions'
import PitchDetails from 'components/Pitches/Details'

import { calculatePledged } from 'utils/helpers'
import { cardProps, imgProps } from './props'

const ActivePitch = ({ pitch }) => (
  <Card {...cardProps}>
    <Box component={Link} to={`user/${pitch.receiver.id}`} textDecoration='none'>
      <CardMedia {...imgProps(pitch.receiver.avatar, pitch.receiver.name)} />
    </Box>
    <PitchDetails
      msg={pitch.message}
      id={pitch.id}
      raised={calculatePledged(pitch.pledges)}
      pledges={pitch.pledges?.length}
    />
    <ActivePitchActions />
  </Card>
)

export default memo(ActivePitch)
