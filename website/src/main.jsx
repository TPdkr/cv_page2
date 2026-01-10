import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ThemeProvider } from './themer.jsx'
import { MyContextProvider } from './navbar/check.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <MyContextProvider>
        <App />
      </MyContextProvider>
    </ThemeProvider>
  </StrictMode>,
)
