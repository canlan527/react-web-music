import React, { memo, useRef, useEffect, useState } from 'react'
import type { FC, ReactNode, MouseEvent } from 'react'
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
  const playProgressRef = useRef<HTMLDivElement>(null)
  const playProgressWrapperRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playProgress, setPlayProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

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
  // 3. 处理 progress 点击事件
  function handlePlayProgress(e: MouseEvent<HTMLDivElement>) {
    console.log('handlePlayProgress')
    // 点击的x点位置
    const offsetX = e.nativeEvent.offsetX
    // progress的实际宽度
    const width = playProgressWrapperRef.current!.getBoundingClientRect().width
    // 点击位置的百分比结果
    let progress = Number(((offsetX / width) * 100).toFixed(2))
    if (progress > 100) {
      progress = 100
    }
    // 获取点击位置的时间
    const currentTime = (progress / 100) * duration
    // 设置歌曲播放进度
    audioRef.current!.currentTime = Number((currentTime / 1000).toFixed(2))
    // 设置进度时间
    setCurrentTime(currentTime)
    // 设置播放进度
    setPlayProgress(progress)
    // 设置宽度样式
    setPlayProgressWidth(progress)
  }

  // 音乐播放的进度处理
  function handleTimeUpdate() {
    // 1. 获取当前的播放时间
    const currentTime = audioRef.current!.currentTime * 1000
    // 2. 计算当前歌曲的播放进度 ：将播放进度 * 1000 转成毫秒，除以duration， 乘以100，变为类似50%的结果
    const progress = Number(((currentTime / duration) * 100).toFixed(2))
    // 3. 设置进度
    setPlayProgress(progress)
    // 5. 设置currentTime
    setCurrentTime(parseInt(currentTime.toString()))
    // 4. 操作DOM
    setPlayProgressWidth(progress)
  }

  // 设置playProgress的dom宽度
  function setPlayProgressWidth(progress: number) {
    playProgressRef.current!.style.width = `${progress}%`
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
          <div className="player_music_time">
            {formatterDuration(currentTime)} / {formatterDuration(currentSong.dt)}
          </div>
          <div className="player_progress" ref={playProgressWrapperRef} onClick={handlePlayProgress}>
            <div className="player_progress__inner">
              <div className="player_progerss_load"></div>
              <div className="player_progerss_play" ref={playProgressRef}>
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
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} />
    </PlayProgressWrapper>
  )
}

PlayerProgress.displayName = 'PlayerProgress'

export default memo(PlayerProgress)
