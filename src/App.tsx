import React, { Suspense, useRef } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from '@/components/app-header'
import AppFooter from './components/app-footer'

function App() {
  return (
    <div className="app" style={{ position: 'relative' }}>
      <AppHeader></AppHeader>
      <Suspense fallback="">
        <div className="main" style={{ minHeight: '100vh' }}>
          {useRoutes(routes)}
        </div>
      </Suspense>
      <AppFooter></AppFooter>
    </div>
  )
}

export default App
