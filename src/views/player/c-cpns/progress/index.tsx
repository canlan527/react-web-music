import React, { memo, useRef, useEffect, useState } from 'react'
import type { FC, ReactNode, MouseEvent } from 'react'
import { PlayProgressWrapper } from './style'
import { getSongUrl } from '@/utils/handle-player'
import { formatterDuration } from '@/utils'
import { appShallowEqual, useAppSelector } from '@/store'

import { Slider } from 'antd'
import { ILyrics } from '@/utils/parse-lyric'

interface IProps {
  children?: ReactNode
  currentSong?: any
  lyrics?: ILyrics[]
}

const PlayerProgress: FC<IProps> = (props) => {
  // 组件内部的数据
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playProgress, setPlayProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [startMove, setStartMove] = useState(false)
  // 从props获取数据
  const { currentSong, lyrics } = props

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
    // 设置duration
    setDuration(currentSong.dt)
  }

  // 拖拽silder进度条
  function handleProgressChange(progress: number) {
    // 设置startMove
    setStartMove(true)
    // 设置进度条
    setPlayProgress(progress)
    // 根据progress百分比设置播放时间
    const currentTime = (progress / 100) * duration
    setCurrentTime(currentTime)
  }

  // 点击进度条后的处理
  function handleAfterChange(progress: number) {
    console.log('handleAfterChange: ', progress)
    // 获取点击位置的歌曲播放时间 毫秒
    const currentTime = (progress / 100) * duration
    // 设置播放器的currentTime 转秒
    audioRef.current!.currentTime = currentTime / 1000
    // 设置状态数据
    setCurrentTime(currentTime)
    setPlayProgress(progress)
    setStartMove(false)
  }

  // 音乐播放的进度处理
  function handleTimeUpdate() {
    // 获取歌曲播放时间 转成毫秒
    const currentTime = audioRef.current!.currentTime * 1000
    setDuration(currentSong.dt)
    if (!startMove) {
      // 得到歌曲的播放进度的百分比
      const progress = (currentTime / duration) * 100
      // 设置进度
      if (progress) {
        setPlayProgress(progress)
      }
      setCurrentTime(currentTime)
    }

    // 根据当前的时间匹配对应的歌词
    // currentTime/lyrics
    let index = -1 // 获取正在播放的lyrics的索引值
    for (let i = 0; i < lyrics!.length; i++) {
      const lyric = lyrics![i]
      if (lyric.time > currentTime) {
        index = i - 1
        break
      }
    }
    console.log(lyrics![index]!.text)
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
            <a href="">{currentSong.name}</a> - <a href="">{currentSong?.ar?.[0]?.name}</a>
          </div>
          <div className="player_music_time">
            {formatterDuration(currentTime)} / {formatterDuration(currentSong.dt)}
          </div>
          <Slider value={playProgress} tooltip={{ formatter: null }} step={0.5} onAfterChange={handleAfterChange} onChange={handleProgressChange} />
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
