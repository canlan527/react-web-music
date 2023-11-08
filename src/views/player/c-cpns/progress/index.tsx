import React, { memo, useRef, useEffect, useState } from 'react'
import type { FC, ReactNode, MouseEvent } from 'react'
import { PlayProgressWrapper } from './style'
import { getSongUrl } from '@/utils/handle-player'
import { formatterDuration } from '@/utils'
import { appShallowEqual, useAppSelector } from '@/store'

import { Slider } from 'antd'

interface IProps {
  children?: ReactNode
  currentSong?: any
}

const PlayerProgress: FC<IProps> = (props) => {
  // 组件内部的数据
  const audioRef = useRef<HTMLAudioElement>(null)
  const playProgressRef = useRef<HTMLDivElement>(null)
  const playProgressWrapperRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playProgress, setPlayProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [startMove, setStartMove] = useState(false)
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
  // console.log(currentSong.id)
  useEffect(() => {
    // 1. 音乐播放，以 src 赋予 Audio
    audioRef.current!.src = getSongUrl(currentSong.id)
    audioRef.current
      ?.play()
      .then((res) => {
        setIsPlaying(true)
        setDuration(currentSong.dt)
        setPlayProgress(0)
        console.log('歌曲播放成功')
      })
      .catch((e) => {
        setIsPlaying(false)
        console.log('歌曲播放失败', e)
      })
  }, [currentSong.id]) // 依赖

  function handlePlaying() {
    // 控制播放/暂停
    isPlaying ? audioRef.current?.pause() : audioRef.current?.play().catch(() => setIsPlaying(false))
    // 改变isPlaying的状态
    setIsPlaying(!isPlaying)
  }

  // // 拖拽silder进度条
  // function handleProgressChange(progress: number) {
  //   console.log('handleProgressChange: ', progress)
  // }

  // 点击进度条后的处理
  // function handleAfterChange(progress: number) {
  //   console.log('handleAfterChange: ', progress)
  // }

  // 音乐播放的进度处理
  function handleTimeUpdate() {
    // 获取歌曲播放时间
    const currentTime = audioRef.current!.currentTime
    // 得到歌曲的播放进度的百分比
    const progress = ((currentTime * 1000) / duration) * 100
    // 设置进度
    setCurrentTime(currentTime)
    setPlayProgress(progress)
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
            <a href="">{currentSong.name}</a> - <a href="">{currentSong.ar[0].name}</a>
          </div>
          <div className="player_music_time">
            {formatterDuration(currentTime)} / {formatterDuration(currentSong.dt)}
          </div>
          <Slider
            value={playProgress}
            tooltip={{ formatter: null }}
            step={0.5}
            // onAfterChange={handleAfterChange}
            // onChange={handleProgressChange}
          />
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
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} />
    </PlayProgressWrapper>
  )
}

PlayerProgress.displayName = 'PlayerProgress'

export default memo(PlayerProgress)
