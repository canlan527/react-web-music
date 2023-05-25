import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from './router'
import AppHeader from '@/components/app-header'
import AppFooter from './components/app-footer'

function App() {
  return (
    <div className="app">
      <AppHeader></AppHeader>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter></AppFooter>
    </div>
  )
}

export default App
