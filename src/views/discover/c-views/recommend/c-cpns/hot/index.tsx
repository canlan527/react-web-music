import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'

interface IProps {
  children?: ReactNode
}

const Hot: FC<IProps> = memo(() => {
  return (
    <HotWrapper>
      <AreaHeaderV1 title="热门推荐" keylist={['华语', '民谣', '摇滚', '流行', '电子']} moreLink="/discover/songs" />
    </HotWrapper>
  )
})
Hot.displayName = 'Hot'

export default Hot
