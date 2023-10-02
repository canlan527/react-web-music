import React, { memo, useRef } from 'react'
import type { ElementRef, FC, ReactNode } from 'react'
import { NewSongWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import SongsItemV2 from '@/components/songs-item-v2'
import { Carousel } from 'antd'
import { ctrBannerList } from '@/utils'

interface IProps {
  children?: ReactNode
}

const NewSong: FC<IProps> = () => {
  const newSongRef = useRef<ElementRef<typeof Carousel>>(null)

  // 从rtk取数据
  const { newSongList } = useAppSelector((state) => ({
    newSongList: state.recommend.newSongList,
  }))

  // icon组件
  const IconPrev = () => <i className="iconfont icon-prev" onClick={handlePrev} />
  const IconNext = () => <i className="iconfont icon-next" onClick={handleNext} />

  // 事件处理函数
  function handlePrev() {
    newSongRef.current?.prev()
  }
  function handleNext() {
    newSongRef.current?.next()
  }

  return (
    <NewSongWrapper>
      <AreaHeaderV1 title="新歌首发" hasMore={false}></AreaHeaderV1>
      <div className="new-song-banner">
        <Carousel ref={newSongRef} arrows prevArrow={<IconPrev />} nextArrow={<IconNext />}>
          {ctrBannerList(6, newSongList).map((page) => (
            <div className="new-song-list" key={page}>
              {newSongList.slice(page * 6, (page + 1) * 6).map((newSong) => (
                <SongsItemV2 key={newSong.id} item={newSong} />
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </NewSongWrapper>
  )
}

NewSong.displayName = 'NewSong'

export default memo(NewSong)
