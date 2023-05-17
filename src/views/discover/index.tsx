import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet, Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <div>
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/ranking">排行榜</Link>
        <Link to="/discover/songs">歌单</Link>
        <Link to="/discover/radioStation">主播电台</Link>
        <Link to="/discover/singer">歌手</Link>
        <Link to="/discover/newAlbum">新碟上架</Link>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  )
}

Discover.displayName = 'Discover'

export default memo(Discover)
