import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Basic from './Basic.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Basic />
  </StrictMode>,
)
