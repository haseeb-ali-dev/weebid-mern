import { Box, Typography } from '@mui/material'

import { Searchbox } from 'components'

import { mainBoxProps, searchTalentProps, whoAreYouPitchingProps } from './props'

const Explore = () => (
  <Box {...mainBoxProps}>
    <Typography {...whoAreYouPitchingProps}>Who are you pitching?</Typography>
    <Typography {...searchTalentProps}>Search for the talent to send your Pitch to.</Typography>
    <Searchbox />
  </Box>
)

export default Explore
