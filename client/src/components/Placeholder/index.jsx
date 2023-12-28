import { Box } from '@mui/material'
import { memo } from 'react'

import { emptyBoxProps } from './props'
import empty from 'assets/no_pitch.png'

const Placeholder = memo(() => (
  <Box {...emptyBoxProps}>
    <Box component='img' src={empty} />
  </Box>
))

export default Placeholder
