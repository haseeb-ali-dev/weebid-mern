import { Backdrop, Box } from '@mui/material'
// import CircularProgress from '@mui/material/CircularProgress'
import 'layouts/Loader/style.css'

const Loader = () => {
  const open = true

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <Box className='loader'>Pitch.....</Box>
        {/* <CircularProgress color='warning' /> */}
      </Backdrop>
    </div>
  )
}

export default Loader
