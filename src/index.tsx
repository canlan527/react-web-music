import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import { BrowserRouter } from 'react-router-dom'
import 'normalize.css'
import './assets/css/reset.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
