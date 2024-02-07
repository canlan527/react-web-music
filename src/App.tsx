import React, { Suspense, useRef } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

function App() {
  return (
    <div className="app" style={{ position: 'relative' }}>
      <Suspense fallback={'loading'}>{useRoutes(routes)}</Suspense>
    </div>
  )
}

export default App
