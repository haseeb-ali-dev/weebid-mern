import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { RecoilRoot } from 'recoil'

import { Main } from 'components'
import { Loader, Nav } from 'layouts'

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Biko',
      fontWeight: 400,
      // color: 'white',
    },
    button: {
      textTransform: 'none',
      fontSize: '16px',
    },
  },
})

const App = () => (
  <ThemeProvider theme={theme}>
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <RecoilRoot>
          <Nav />
          <Main />
        </RecoilRoot>
      </BrowserRouter>
    </Suspense>
  </ThemeProvider>
)

export default App
