/* eslint-disable */
import { Box } from '@mui/material'

import { Embed } from 'hyvor-talk-react'

const Comments = () => (
  <Box sx={{ width: '100%', p: 0 }}>
    <Embed
      websiteId={process.env.REACT_APP_YOUR_WEBSITE_ID}
      id={process.env.REACT_APP_WEBPAGE_IDENTIFIER}
    />
  </Box>
)

export default Comments
