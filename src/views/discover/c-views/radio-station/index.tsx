import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const RadioStation: FC<IProps> = () => {
  return <div>RadioStation</div>
}

RadioStation.displayName = 'RadioStation'

export default memo(RadioStation)
