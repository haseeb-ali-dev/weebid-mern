import React, { memo } from 'react'
import { Box, Skeleton } from '@mui/material'

export default memo(({ gap = 1 }) => (
  <Box display='flex' gap={gap}>
    <Skeleton
      sx={{ bgcolor: 'grey.900' }}
      variant='rectangular'
      width='25%'
      height={300}
    />
    <Skeleton
      sx={{ bgcolor: 'grey.900' }}
      variant='rectangular'
      width='25%'
      height={300}
    />
    <Skeleton
      sx={{ bgcolor: 'grey.900' }}
      variant='rectangular'
      width='25%'
      height={300}
    />
    <Skeleton
      sx={{ bgcolor: 'grey.900' }}
      variant='rectangular'
      width='25%'
      height={300}
    />
  </Box>
))
