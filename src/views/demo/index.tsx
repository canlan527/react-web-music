import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Demo: FC<IProps> = () => {
  return <div>Demo</div>
}

Demo.displayName = 'Demo'

export default memo(Demo)
