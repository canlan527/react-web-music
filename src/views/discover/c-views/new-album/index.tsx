import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  return <div>NewAlbum</div>
}

NewAlbum.displayName = 'NewAlbum'

export default memo(NewAlbum)
