import { memo } from 'react'
import {
  Typography, Avatar, Box, Stack,
} from '@mui/material'

import {
  confirmedProps, avatarProps, receiverProps, senderProps,
} from './props'

const PitchUser = memo(({ sender, receiver, total = 0 }) => (
  <>
    <Typography {...confirmedProps}>
      CONFIRMED PITCH
    </Typography>
    <Box sx={{ display: 'flex', mt: 2, gap: 3 }}>
      <Avatar {...avatarProps(receiver.avatar)} />
      <Stack>
        <Typography {...receiverProps}>{receiver.name}</Typography>
        <Typography {...senderProps}>Pitched By {sender.name} | {total} Pledges</Typography>
      </Stack>
    </Box>
  </>
))

export default PitchUser
