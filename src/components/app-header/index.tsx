import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import headerData from '@/assets/data/header_data.json'
import logoPng from '@/assets/imgs/logo.png'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  function showItem(item: any) {
    if (item.type === 'path') {
      return <NavLink to={item.link}>{item.title}</NavLink>
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  return (
    <HeaderWrapper>
      <div className="nav">
        <HeaderLeft>
          <a className="logo-box" href="/">
            <div className="logo">
              <img src={logoPng} alt="" />
            </div>
            <span className="logo-title">X Muscial</span>
          </a>

          <div className="nav-item">
            {headerData.map((item) => (
              <div key={item.link} className="item">
                {showItem(item)}
              </div>
            ))}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <div className="search-box">
            <input type="text" placeholder="搜索音乐、歌手、歌单" />
            <i className="iconfont icon-search"></i>
          </div>
          <div className="login-box">
            <div className="login-btn">登 录</div>
          </div>
        </HeaderRight>
      </div>
    </HeaderWrapper>
  )
}

AppHeader.displayName = 'AppHeader'

export default memo(AppHeader)
