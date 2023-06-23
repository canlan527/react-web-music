import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet, Link } from 'react-router-dom'
import NavBar from './c-cpns/nav-bars'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  )
}

Discover.displayName = 'Discover'

export default memo(Discover)
