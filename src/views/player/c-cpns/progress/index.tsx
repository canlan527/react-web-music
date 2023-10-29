import React, { memo, useRef, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { PlayProgressWrapper } from './style'
import { getSongUrl } from '@/utils/handle-player'
import { formatterDuration } from '@/utils'
import { appShallowEqual, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
  currentSong?: any
}

const PlayerProgress: FC<IProps> = (props) => {
  // 组件内部的数据
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // 从props获取数据
  const { currentSong } = props

  // 从store获取数据
  // const { currentSong } = useAppSelector(
  //   (state) => ({
  //     currentSong: state.player.currentSong,
  //   }),
  //   appShallowEqual
  // )

  // 组件内的副作用操作
  console.log(currentSong.id)
  useEffect(() => {
    // 1. 音乐播放，以 src 赋予 Audio
    audioRef.current!.src = getSongUrl(currentSong.id)
    audioRef.current
      ?.play()
      .then((res) => {
        console.log('歌曲播放成功')
      })
      .catch((e) => {
        console.log('歌曲播放失败', e)
      })
  }, [currentSong.id]) // 依赖

  // 组件内部事件处理
  // 歌曲播放处理
  function handlePlaying() {
    // 1. 控制播放器的播放和暂停
    isPlaying ? audioRef.current?.pause() : audioRef.current?.play().catch(() => setIsPlaying(false))

    // 2. 改变isplaying的状态
    setIsPlaying(!isPlaying)
  }

  return (
    <PlayProgressWrapper $isplaying={isPlaying}>
      <div className="player_item player_footer">
        <a href="" className="btn_prev">
          <i className="iconfont"></i>
        </a>
        <a className="btn_play" onClick={handlePlaying}>
          <i className="iconfont"></i>
        </a>
        <a href="" className="btn_next">
          <i className="iconfont"></i>
        </a>
        <div className="player_progress_control">
          <div className="player_music_info ellipsis">
            <a href="">Dear Santa</a> - <a href="">OneRepublic</a>
          </div>
          <div className="player_music_time">2:11 / {formatterDuration(currentSong.dt)}</div>
          <div className="player_progress">
            <div className="player_progress__inner">
              <div className="player_progerss_load"></div>
              <div className="player_progerss_play">
                <i className="player_progress_dot"></i>
              </div>
            </div>
          </div>
        </div>
        <a href="" className="btn_playmode">
          <i className="iconfont"></i>
        </a>
        <a href="" className="btn_like">
          <i className="iconfont"></i>
        </a>
        <a href="" className="btn_comment">
          <i className="iconfont"></i>
        </a>
        <div className="player_voice_control">
          <a href="" className="btn_voice"></a>
          <div className="player_vioce_inner">
            <div className="player_voice_progress">
              <i className="iconfont player_voice_dot"></i>
            </div>
          </div>
        </div>
      </div>
      <audio ref={audioRef} />
    </PlayProgressWrapper>
  )
}

PlayerProgress.displayName = 'PlayerProgress'

export default memo(PlayerProgress)
