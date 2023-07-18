import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ItemWrapper } from './style'
import { formatterNumber } from '@/utils'

interface IProps {
  children?: ReactNode
  item: itemType
}

type itemType = {
  key?: string
  name?: string
  id?: string
  picUrl?: string
  playCount?: string
}

const SongsItem: FC<IProps> = memo((props) => {
  const { item } = props
  return (
    <ItemWrapper>
      <div className="hot-item" key={item.id}>
        <div className="item-top">
          <div className="item-img">
            <i className="iconfont icon-play"></i>
            <img src={item.picUrl + '?param=220x220'} alt="" />
          </div>
          <div className="item-count">播放量 {item.playCount && formatterNumber(item.playCount)}</div>
        </div>
        <div className="item-bottom">
          <span className="item-title">{item.name}</span>
        </div>
      </div>
    </ItemWrapper>
  )
})

SongsItem.displayName = 'SongsItem'

export default SongsItem
