import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './Context.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <StrictMode>
        <AppProvider>
          <App />
        </AppProvider>
      </StrictMode>
    </BrowserRouter>
)
