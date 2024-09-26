import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TemplateExpression from './TemplateExpression/TemplateExpression.jsx'
import Event from './Event/Event.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <TemplateExpression />
    <Event />
  </StrictMode>,
)
