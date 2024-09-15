

import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './GlobalStyles'

import App from './App'

import { theme } from './theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  
  document.getElementById('root')
)