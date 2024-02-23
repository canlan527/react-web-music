import React, { Suspense, useRef } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import { ConfigProvider } from 'antd'

function App() {
  return (
    <div className="app" style={{ position: 'relative' }}>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token，影响范围大
            colorPrimary: '#31C27C',
          },
        }}
      >
        <Suspense fallback={'loading'}>{useRoutes(routes)}</Suspense>
      </ConfigProvider>
    </div>
  )
}

export default App
