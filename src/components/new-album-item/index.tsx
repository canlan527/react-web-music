import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NewAlbumItemWrapper } from './style'
import recordIcon from '@/assets/imgs/record_icon.png'
import { getImageSize } from '@/utils'

interface IProps {
  children?: ReactNode
  item: ItemType
  width?: string | number
}

type ItemType = {
  key?: string
  albumId?: number
  picUrl?: string
  coverUrl?: string
  albumName?: string
  artistName?: string
  artists?: any[]
  name?: string
}

const NewAlbumItem: FC<IProps> = (props) => {
  const { item } = props
  return (
    <NewAlbumItemWrapper itemwidth={props.width ?? 180} key={item.albumId}>
      <div className="new-album-item-cover">
        <div className="cover">
          <div className="item-mask"></div>
          <div className="cover-img">
            {item.picUrl && <img src={item.picUrl && getImageSize(item.picUrl, 180)} alt="" />}
            {item.coverUrl && <img src={item.coverUrl && getImageSize(item.coverUrl, 180)} alt="" />}
          </div>
          <i className="iconfont icon-play-filling"></i>
        </div>
        <div className="recordIcon-icon">
          <img src={recordIcon} alt="" />
        </div>
      </div>
      {item.albumName && (
        <div className="new-album-item-info">
          <p className="new-album-name ellipsis">{item.albumName}</p>
          <p className="new-album-item-singer ellipsis">{item.artistName}</p>
        </div>
      )}
      {item.name && (
        <div className="new-album-item-info">
          <p className="new-album-name ellipsis">{item.name}</p>
          <p className="new-album-item-singer-2 ellipsis">{item.artists![0].name}</p>
        </div>
      )}
    </NewAlbumItemWrapper>
  )
}

NewAlbumItem.displayName = 'NewAlbumItem'

export default memo(NewAlbumItem)
