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
      <AreaHeaderV1 />
    </HotWrapper>
  )
})
Hot.displayName = 'Hot'

export default Hot
