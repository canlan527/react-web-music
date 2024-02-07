import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ItemWrapper } from './style'
import { formatterDuration, getImageSize } from '@/utils'
import { Link, NavLink } from 'react-router-dom'
import { useAppDispatch } from '@/store'
import { fetchCurrentSongAction } from '@/store/modules/player'

interface IProps {
  children?: ReactNode
  item: itemType
}

type itemType = {
  key?: string
  id: number
  picUrl?: string
  name?: string
  singerName?: string
  duration?: number
}

const SongsItemV2: FC<IProps> = memo((props) => {
  const { item } = props
  const dispatch = useAppDispatch()

  // 点击歌曲播放
  function handleSongPlay(id: number) {
    dispatch(fetchCurrentSongAction(id))
  }

  return (
    <ItemWrapper itemwidth="86">
      <div className="hot-item" key={item.id}>
        <div className="item-left" onClick={() => handleSongPlay(item.id)}>
          <NavLink to={`/player/${item.id}`}>
            <div className="item-img">
              <img src={item.picUrl && getImageSize(item.picUrl, 86)} alt="" />
            </div>
            <i className="iconfont icon-play"></i>
          </NavLink>
        </div>
        <div className="item-right">
          <div className="item-info">
            <div className="item-title">{item.name}</div>
            <div className="item-name">{item.singerName}</div>
          </div>
          <div className="item-duration">{formatterDuration(item.duration!)}</div>
        </div>
      </div>
    </ItemWrapper>
  )
})

SongsItemV2.displayName = 'SongsItemV2'

export default SongsItemV2
