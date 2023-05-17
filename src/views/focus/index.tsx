import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Focus: FC<IProps> = () => {
  return <div>Focus</div>
}

Focus.displayName = 'Focus'

export default memo(Focus)
