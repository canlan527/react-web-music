import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PlaySonginfoWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const PlayerSonginfo: FC<IProps> = () => {
  return (
    <PlaySonginfoWrapper>
      <div className="player_right">
        <div className="song_info">
          <a className="song_info_cover">
            <img className="song_info_pic" src="https://y.qq.com/music/photo_new/T002R300x300M000001vZNL53OG2jp_1.jpg?max_age=2592000" alt="" />
          </a>
          <div className="song_info_item song_info_name ellipsis">
            歌曲名：
            <a href="">乘风破浪第三季 张俪、王紫璇、于文文、张蔷、《野蔷薇》</a>
          </div>
          <div className="song_info_item song_info_singer ellipsis">
            歌手：
            <a href="">乘风破浪三</a>
          </div>
          <div className="song_info_item song_info_album ellipsis">
            专辑：
            <a href="">乘风破浪 第三季| 姐姐们来了</a>
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
