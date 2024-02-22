import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { AvatarWrapper } from './style'
import RecordIcon from '@/assets/imgs/record_icon.png'

interface IProps {
  children?: ReactNode
  width?: number
  picUrl?: string
  name?: string
}

const Avatar: FC<IProps> = (props) => {
  // 从属性取数据
  const { width = 120, picUrl, name } = props
  // 头像图片
  const pic = picUrl ? `${picUrl}?param=120y120` : RecordIcon

  return (
    <AvatarWrapper $width={width}>
      <div className="avatar_img">
        <img src={pic} alt="" />
      </div>
      <p>{name}</p>
    </AvatarWrapper>
  )
}

Avatar.displayName = 'Avatar'

export default memo(Avatar)
