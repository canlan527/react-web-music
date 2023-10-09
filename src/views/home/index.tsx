import React, { Suspense, memo } from 'react'
import type { FC, ReactNode } from 'react'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import { Outlet, useRoutes } from 'react-router-dom'
import routes from '@/router'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  return (
    <>
      <AppHeader></AppHeader>
      <Suspense fallback="">
        <div className="main" style={{ minHeight: '100vh' }}>
          {useRoutes(routes)}
          <Outlet />
        </div>
      </Suspense>
      <AppFooter></AppFooter>
    </>
  )
}

Home.displayName = 'Home'

export default memo(Home)
