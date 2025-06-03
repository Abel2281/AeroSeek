import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LocationContextProvider } from './context/LocationContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocationContextProvider>
      <App />
    </LocationContextProvider>
  </StrictMode>,
)
