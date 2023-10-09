import React, { Suspense, memo } from 'react'
import type { FC, ReactNode } from 'react'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import { Outlet, useRoutes } from 'react-router-dom'
import routes from '@/router'
import { HomeWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  return (
    <HomeWrapper>
      <AppHeader></AppHeader>
      <Suspense fallback="">
        <div className="main">
          {useRoutes(routes)}
          <Outlet />
        </div>
      </Suspense>
      <AppFooter></AppFooter>
    </HomeWrapper>
  )
}

Home.displayName = 'Home'

export default memo(Home)
