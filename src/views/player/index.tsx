import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PlayerWrapper, PlayerContainer } from './style'
import PlayerSonginfo from './c-cpns/songinfo'
import PlayerSonglist from './c-cpns/songlist'
import PlayerProgress from './c-cpns/progress'

interface IProps {
  children?: ReactNode
}

const Player: FC<IProps> = () => {
  return (
    <PlayerWrapper>
      <div className="player-header-logo">X Muscial</div>
      <div className="player-header-login">登录</div>
      <div className="player-mask"></div>
      <div className="player-bg-img"></div>
      <PlayerContainer>
        <div className="player_item player_header"></div>
        <div className="player_item player_content_wrapper">
          <div className="player_content">
            <PlayerSonglist />
            <PlayerSonginfo />
          </div>
        </div>
        <PlayerProgress />
      </PlayerContainer>
    </PlayerWrapper>
  )
}

Player.displayName = 'Player'

export default memo(Player)
