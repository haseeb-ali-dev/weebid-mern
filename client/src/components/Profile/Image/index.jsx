import {
  CardMedia, Card, Box, Typography, Button, IconButton,
} from '@mui/material'
import { MoreHoriz } from '@mui/icons-material'

import {
  makePitchProps, threeDotsProps,
  nameAndActionsProps, imageProps, profileImgCard,
} from './props'

const ProfileImage = ({ user }) => (
  <Card {...profileImgCard}>
    <Box style={{ position: 'relative' }}>
      <CardMedia {...imageProps(user.avatar)} />
      <Box {...nameAndActionsProps}>
        <Typography variant='inherit' color='white' ml='10px'>
          {user.name}
        </Typography>
        <IconButton {...threeDotsProps}>
          <MoreHoriz fontSize='small' />
        </IconButton>
      </Box>
    </Box>
    <Button {...makePitchProps(user)}>
      Make a pitch to {user.name}
    </Button>
  </Card>
)

export default ProfileImage
