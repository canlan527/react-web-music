import React, { memo, useRef } from 'react'
import type { ElementRef, FC, ReactNode } from 'react'
import { appShallowEqual, useAppSelector } from '@/store'

import { Carousel } from 'antd'

import AreaHeaderV1 from '@/components/area-header-v1'
import NewAlbumItem from '@/components/new-album-item'
import { NewWrapper } from './style'
import { ctrBannerList } from '@/utils'

interface IProps {
  children?: ReactNode
}

const New: FC<IProps> = () => {
  const newRef = useRef<ElementRef<typeof Carousel>>(null)
  const { newAlbum } = useAppSelector(
    (state) => ({
      newAlbum: state.recommend.newAlbum,
    }),
    appShallowEqual
  )

  // icon组件
  const IconPrev = () => <i className="iconfont icon-prev" onClick={handlePrev} />
  const IconNext = () => <i className="iconfont icon-next" onClick={handleNext} />

  // 事件处理函数
  function handlePrev() {
    newRef.current?.prev()
  }
  function handleNext() {
    newRef.current?.next()
  }

  return (
    <NewWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/newAlbum"></AreaHeaderV1>
      <div className="new-content">
        <div className="banner">
          <Carousel ref={newRef} dots={false} arrows prevArrow={<IconPrev />} nextArrow={<IconNext />}>
            {ctrBannerList(5, newAlbum).map((page) => {
              return (
                <div key={page} className="new-album-content">
                  <div className="new-album-list">
                    {newAlbum.slice(page * 5, (page + 1) * 5).map((album) => (
                      <NewAlbumItem key={album.albumId} item={album} />
                    ))}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
      </div>
    </NewWrapper>
  )
}

New.displayName = 'New'

export default memo(New)
