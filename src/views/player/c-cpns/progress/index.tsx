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

  // 组件内部事件处理
  // 歌曲播放处理
  function handlePlaying() {
    // 1. 控制播放器的播放和暂停
    isPlaying ? audioRef.current?.pause() : audioRef.current?.play().catch(() => setIsPlaying(false))

    // 2. 改变isplaying的状态
    setIsPlaying(!isPlaying)
  }

  // 封装歌曲播放方法
  function setSongPlay(progress: number) {
    // 获取duration
    duration === 0 ? setDuration(currentSong.dt) : duration
    // 获取点击位置的时间
    const currentTime = (progress / 100) * duration
    // 设置歌曲播放进度
    audioRef.current!.currentTime = Number((currentTime / 1000).toFixed(2))
    // 设置进度时间
    setCurrentTime(currentTime)
    // 设置播放进度
    setPlayProgress(progress)
  }

  // 音乐播放的进度处理
  function handleTimeUpdate() {
    // 1. 获取当前的播放时间
    const currentTime = audioRef.current!.currentTime * 1000
    // 如果不是移动dot，正常计算progerss
    if (!startMove) {
      // 2. 计算当前歌曲的播放进度 ：将播放进度 * 1000 转成毫秒，除以duration， 乘以100，变为类似50%的结果
      const progress = Number(((currentTime / duration) * 100).toFixed(2))
      // 3. 设置进度
      setPlayProgress(progress)
      // 5. 设置currentTime
      setCurrentTime(parseInt(currentTime.toString()))
    }
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
          <Slider value={playProgress} tooltip={{ formatter: null }} step={0.5} />
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
