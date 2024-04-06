import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6a1b9a',
    },
    background: {
      default: '#212121',
    },
    text: {
      primary: '#fafafa',
    },
  },
});




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
