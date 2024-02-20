import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { appShallowEqual, useAppDispatch, useAppSelector } from '@/store'
import { Link } from 'react-router-dom'

import PlayerSonginfo from './c-cpns/songinfo'
import PlayerSonglist from './c-cpns/songlist'
import PlayerProgress from './c-cpns/progress'

import { PlayerWrapper, PlayerContainer } from './style'

interface IProps {
  children?: ReactNode
}

const Player: FC<IProps> = () => {
  // 从 rtk 里拿取数据
  const { currentSong, lyrics, lyricIndex } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyrics: state.player.lyrics,
      lyricIndex: state.player.lyricIndex,
    }),
    appShallowEqual
  )

  // 组件内数据
  const bgUrl = currentSong?.al?.picUrl || 'https://i.pinimg.com/564x/13/4f/d6/134fd6541c04b0c7a498d3411e014266.jpg'

  return (
    <PlayerWrapper $bgimg={bgUrl}>
      <Link className="player-header-logo" to="/">
        X Muscial
      </Link>
      <div className="player-header-login">登录</div>
      <div className="player-mask"></div>
      <div className="player-bg-img"></div>
      <PlayerContainer>
        <div className="player_item player_header"></div>
        <div className="player_item player_content_wrapper">
          <div className="player_content">
            <PlayerSonglist currentSong={currentSong} />
            <PlayerSonginfo currentSong={currentSong} />
          </div>
        </div>
        <PlayerProgress currentSong={currentSong} lyrics={lyrics} lyricIndex={lyricIndex} />
      </PlayerContainer>
    </PlayerWrapper>
  )
}

Player.displayName = 'Player'

export default memo(Player)
