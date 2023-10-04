import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PlayerWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Player: FC<IProps> = () => {
  return (
    <PlayerWrapper>
      Player
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </PlayerWrapper>
  )
}

Player.displayName = 'Player'

export default memo(Player)
