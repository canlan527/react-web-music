import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PlaySonginfoWrapper } from './style'

interface IProps {
  children?: ReactNode
  currentSong: any
}

const PlayerSonginfo: FC<IProps> = (props) => {
  const { currentSong } = props
  return (
    <PlaySonginfoWrapper>
      <div className="player_right">
        <div className="song_info">
          <a className="song_info_cover">
            <img className="song_info_pic" src={currentSong.al.picUrl} alt="" />
          </a>
          <div className="song_info_item song_info_name ellipsis">
            歌曲名：
            <a href="">{currentSong.name}</a>
          </div>
          <div className="song_info_item song_info_singer ellipsis">
            歌手：
            <a href="">{currentSong.ar[0].name}</a>
          </div>
          <div className="song_info_item song_info_album ellipsis">
            专辑：
            <a href="">{currentSong.al.name}</a>
          </div>
        </div>
        <div className="song_lyric">
          <div className="song_lyric_wrapper">
            <div className="song_lyric_inner">
              <p>
                <span>Produced by：Dave Jenkins Jr</span>
              </p>
              <p className="on">
                <span>Mixed by：Dave Jenkins Jr</span>
              </p>
              <p>
                <span>I don't need you riding white horses to my house</span>
              </p>
              <p>
                <span>I don't need you buying red roses for my love</span>
              </p>
              <p>
                <span>I don't need you riding white horses to my house</span>
              </p>
              <p>
                <span>I don't need you buying red roses for my love</span>
              </p>
              <p>
                <span>I don't need you riding white horses to my house</span>
              </p>
              <p>
                <span>I don't need you buying red roses for my love</span>
              </p>
              <p>
                <span>I don't need you riding white horses to my house</span>
              </p>
              <p>
                <span>I don't need you buying red roses for my love</span>
              </p>
              <p>
                <span>I don't need you riding white horses to my house</span>
              </p>
              <p>
                <span>I don't need you buying red roses for my love</span>
              </p>
              <p>
                <span>I don't need you riding white horses to my house</span>
              </p>
              <p>
                <span>I don't need you buying red roses for my love</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PlaySonginfoWrapper>
  )
}

PlayerSonginfo.displayName = 'PlayerSonginfo'

export default memo(PlayerSonginfo)
