import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ItemWrapper } from './style'
import { formatterNumber, getImageSize } from '@/utils'
import recordPng from '@/assets/imgs/record_icon.png'

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
  width?: string | number
  coverImgUrl?: string
}

const SongsItemV1: FC<IProps> = memo((props) => {
  const { item } = props
  return (
    <ItemWrapper itemwidth={item.width || 220}>
      <div className="hot-item" key={item.id}>
        <div className="item-top">
          <div className="item-img">
            <div className="item-img-box">
              {item.picUrl ? (
                <img src={item.picUrl && getImageSize(item.picUrl, 220)} alt="" />
              ) : (
                <img src={item.coverImgUrl && getImageSize(item.coverImgUrl, 220)} alt="" />
              )}
            </div>
            <i className="iconfont icon-play-filling"></i>
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

SongsItemV1.displayName = 'SongsItemV1'

export default SongsItemV1
