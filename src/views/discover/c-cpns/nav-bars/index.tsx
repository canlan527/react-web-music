import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { NavBarWrapper } from './style'
import { discoverMenuData } from '@/assets/data/local_data'

interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = () => {
  return (
    <NavBarWrapper className="wrap-v1">
      {discoverMenuData.map((item) => (
        <div className="item" key={item.link}>
          <NavLink to={item.link}>{item.title}</NavLink>
        </div>
      ))}
    </NavBarWrapper>
  )
}

NavBar.displayName = 'NavBar'

export default memo(NavBar)
