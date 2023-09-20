import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ItemWrapper } from './style'
import { getImageSize } from '@/utils'

interface IProps {
  children?: ReactNode
  item: itemType
}

type itemType = {
  key?: string
  id?: string
  picUrl?: string
  songName?: string
  singerName?: string
}

const SongsItemV2: FC<IProps> = memo((props) => {
  const { item } = props
  return (
    <ItemWrapper itemwidth="86">
      <div className="hot-item" key={item.id}>
        <div className="item-left">
          <div className="item-img">
            <i className="iconfont icon-play"></i>
            <img src={item.picUrl && getImageSize(item.picUrl, 86)} alt="" />
          </div>
        </div>
        <div className="item-right">
          <span className="item-title">{item.songName}</span>
          <span className="item-name">{item.singerName}</span>
        </div>
      </div>
    </ItemWrapper>
  )
})

SongsItemV2.displayName = 'SongsItemV2'

export default SongsItemV2
