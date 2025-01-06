import { memo } from 'react'
import { Link } from 'react-router-dom'
import { CardContent, Typography, Box } from '@mui/material'

const PitchDetails = ({
  msg, id, raised = 0, pledges = 0,
}) => (
  <CardContent sx={{ pb: 1 }}>
    <Box component={Link} to={`/question/${id}`} sx={{ color: 'white', textDecoration: 'none' }}>
      <Typography gutterBottom variant='h5'>
        {msg}
      </Typography>
    </Box>
    <Typography variant='body1' color='#8e8d8d'>
      ${raised} Raised | {pledges} Pledges
    </Typography>
  </CardContent>
)

export default memo(PitchDetails)
