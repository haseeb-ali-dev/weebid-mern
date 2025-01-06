import { Box, Button, Typography } from '@mui/material'
import { ChatBubbleOutline, ArrowBack, ArrowForward } from '@mui/icons-material'

import 'components/Home/Slide/style.css'

const Slide = ({
  next, prev, text = 'Slider', btnText = 'Click', head = 'Heading', featured = 'Featured Talent',
}) => (
  <Box className='slider-content'>
    <Typography textTransform='uppercase' color='#f8b500' fontWeight='bold' fontSize='16px'>{featured}</Typography>
    <Typography fontSize='40px'>{head}</Typography>
    <Typography>{text}</Typography>
    <Button
      id='theme-btn'
      sx={{
        mt: 5, mb: 2, fontSize: '1.25rem', px: 2, fontWeight: 'bold', pt: 1, borderRadius: 2,
      }}
      startIcon={<ChatBubbleOutline fontSize='large' />}
    >{btnText}</Button>
    <Box className='slider-navigate'>
      <Button id='theme-btn2' onClick={prev}><ArrowBack fontSize='large' /></Button>
      <Button id='theme-btn2' onClick={next}><ArrowForward fontSize='large' /></Button>
    </Box>
    <Box className='swiper-pagination' />
  </Box>
)

export default Slide
