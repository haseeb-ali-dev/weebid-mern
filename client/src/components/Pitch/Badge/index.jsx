import { Box, Badge } from '@mui/material'
import { CommentOutlined } from '@mui/icons-material'

import { badgeStyle, shapeStyles } from './props'

import image from 'assets/slider5.png'

const PitchBadge = ({ img = image }) => (
  <Box>
    <Badge overlap='circular' badgeContent={<CommentOutlined fontSize='small' />} sx={badgeStyle}>
      <Box component='img' sx={{ ...shapeStyles }} src={img} />
    </Badge>
  </Box>
)

export default PitchBadge
