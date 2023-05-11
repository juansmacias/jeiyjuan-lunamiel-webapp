import * as React from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { PersistGate } from 'redux-persist/integration/react'

import theme from 'theme'
import App from 'components/App'
import reportWebVitals from 'reportWebVitals'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <ThemeProvider theme={theme}>
      <App />
  </ThemeProvider>
)

reportWebVitals();
