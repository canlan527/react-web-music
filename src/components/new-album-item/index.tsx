import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NewAlbumItemWrapper } from './style'
import recordIcon from '@/assets/imgs/record_icon.png'
import { getImageSize } from '@/utils'

interface IProps {
  children?: ReactNode
  item: ItemType
}

type ItemType = {
  key?: string
  albumId?: number
  coverUrl?: string
  albumName?: string
  artistName?: string
  width?: string | number
}

const NewAlbumItem: FC<IProps> = (props) => {
  const { item } = props
  return (
    <NewAlbumItemWrapper itemwidth={item.width ?? 180} key={item.albumId}>
      <div className="new-album-item-cover">
        <div className="cover">
          <img src={item.coverUrl && getImageSize(item.coverUrl, 180)} alt="" />
        </div>
        <div className="recordIcon-icon">
          <img src={recordIcon} alt="" />
        </div>
      </div>
      <div className="new-album-item-info">
        <p className="new-album-name ellipsis">{item.albumName}</p>
        <p className="new-album-item-singer ellipsis">{item.artistName}</p>
      </div>
    </NewAlbumItemWrapper>
  )
}

NewAlbumItem.displayName = 'NewAlbumItem'

export default memo(NewAlbumItem)
