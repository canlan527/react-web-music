import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { HeaderWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  return (
    <HeaderWrapper>
      <div className="nav">
        <Link to="/discover" className="item">发现音乐</Link>
        <Link to="/focus" className="item">关注</Link>
        <Link to="/mine" className="item">我的音乐</Link>
      </div>
    </HeaderWrapper>
  )
}

AppHeader.displayName = 'AppHeader'

export default memo(AppHeader)
