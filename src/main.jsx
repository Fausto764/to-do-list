import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import './css/index.css'
import { ThemeContextProvider } from './Context/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
)
