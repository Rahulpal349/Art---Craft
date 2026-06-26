import React from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css'
import './assets/styles/App.css'
import App from './App.jsx' // Import legacy global admin CSS

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
