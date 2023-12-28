import { CardActions, IconButton } from '@mui/material'
import { ShareOutlined, ThumbUpOutlined } from '@mui/icons-material'

import { shareBtnProps, likeBtnProps } from './props'

const ActivePitchActions = () => (
  <CardActions sx={{ px: 2, pb: 2, gap: 0.5 }}>
    <IconButton {...shareBtnProps}>
      <ShareOutlined />
    </IconButton>
    <IconButton {...likeBtnProps}>
      <ThumbUpOutlined />
    </IconButton>
  </CardActions>
)

export default ActivePitchActions
