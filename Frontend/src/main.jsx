import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import Routing from './utils/Routing.jsx'
import { ThemeProvider } from './utils/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
