import React, { memo, useRef, useEffect, useState } from 'react'
import type { FC, ReactNode, MouseEvent } from 'react'
import { PlayProgressWrapper } from './style'
import { getSongUrl } from '@/utils/handle-player'
import { formatterDuration } from '@/utils'
import { appShallowEqual, useAppDispatch, useAppSelector } from '@/store'

import { Slider } from 'antd'
import { ILyrics } from '@/utils/parse-lyric'
import { changeLyricIndexAction, changePlayModeAction, changePlaylistSongAction } from '@/store/modules/player'

interface IProps {
  children?: ReactNode
  currentSong?: any
  lyrics?: ILyrics[]
  lyricIndex?: number
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
  const { currentSong, lyrics, lyricIndex } = props

  // 从store获取数据
  const { playMode, playlist, playIndex } = useAppSelector(
    (state) => ({
      playMode: state.player.playMode,
      playlist: state.player.playsongList,
      playIndex: state.player.playsongIndex,
    }),
    appShallowEqual
  )
  const dispatch = useAppDispatch()

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
    // 输出playlist
    // console.log(playlist)
  }, [currentSong.id]) // 依赖

  // 点击播放/暂停事件
  function handlePlaying() {
    console.log('handlePlaying')
    // 控制播放/暂停
    isPlaying ? audioRef.current?.pause() : audioRef.current?.play().catch(() => setIsPlaying(false))
    // 改变isPlaying的状态
    setIsPlaying(!isPlaying)
    // 设置duration
    setDuration(currentSong.dt)
  }

  // 点击切换歌曲
  function handleChangeSong(isNext = true) {
    dispatch(changePlaylistSongAction(isNext))
  }

  // 点击切换播放模式
  function handleChangePlayMode() {
    let newPlayMode = playMode + 1
    if (newPlayMode > 4) newPlayMode = 1
    dispatch(changePlayModeAction(newPlayMode))
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
    let index = lyrics!.length! - 1 // 获取正在播放的lyrics的索引值
    for (let i = 0; i < lyrics!.length; i++) {
      const lyric = lyrics![i]
      if (lyric!.time > currentTime) {
        index = i - 1
        break
      }
    }

    // 判断index,如果index不做变化就返回
    if (lyricIndex === index || index === -1) return

    // 匹配对应歌词的index,记录index
    dispatch(changeLyricIndexAction(index))
    console.log(lyrics![index]?.text)
  }

  // 播放结束的处理
  function handleEnded() {
    if (playMode === 2) {
      // 单曲循环
      audioRef.current!.currentTime = 0
      audioRef.current!.play()
    } else if (playMode === 4) {
      // 顺序播放到最后一首就不再播放
      if (playIndex === playlist.length - 1) {
        return
      } else {
        handleChangeSong(true)
      }
    } else {
      handleChangeSong(true)
    }
  }

  return (
    <PlayProgressWrapper $isplaying={isPlaying} $playmode={playMode}>
      <div className="player_item player_footer">
        <a className="btn_prev" onClick={() => handleChangeSong(false)}>
          <i className="iconfont"></i>
        </a>
        <a className="btn_play" onClick={handlePlaying}>
          <i className="iconfont"></i>
        </a>
        <a className="btn_next" onClick={() => handleChangeSong()}>
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
        <a className="btn_playmode" onClick={handleChangePlayMode}>
          <i className="iconfont"></i>
        </a>
        <a className="btn_like">
          <i className="iconfont"></i>
        </a>
        <a className="btn_comment">
          <i className="iconfont"></i>
        </a>
        <div className="player_voice_control">
          <a className="btn_voice"></a>
          <div className="player_vioce_inner">
            <div className="player_voice_progress">
              <i className="iconfont player_voice_dot"></i>
            </div>
          </div>
        </div>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handleEnded} />
    </PlayProgressWrapper>
  )
}

PlayerProgress.displayName = 'PlayerProgress'

export default memo(PlayerProgress)
