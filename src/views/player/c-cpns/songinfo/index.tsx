import React, { memo, useEffect, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { PlaySonginfoWrapper } from './style'
import { ILyrics } from '@/utils/parse-lyric'
import { useAppSelector } from '@/store'
import classNames from 'classnames'
import { Link, Element, Events, animateScroll, scrollSpy, scroller } from 'react-scroll'

interface IProps {
  children?: ReactNode
  currentSong: any
  lyrics?: ILyrics[]
  lyricIndex?: number
}

const PlayerSonginfo: FC<IProps> = (props) => {
  // 组件自己的数据
  const lineHeight = 34 // 一行歌词的高度
  const lyricInnerRef = useRef<HTMLDivElement>(null) //  歌词inner元素
  const lyricWrapperRef = useRef<HTMLDivElement>(null) //  歌词Wrapper元素

  // 从props获取数据
  const { currentSong } = props

  // 从 rtk 里取数据
  const { lyrics, lyricIndex } = useAppSelector((state) => ({
    lyrics: state.player.lyrics,
    lyricIndex: state.player.lyricIndex,
  }))

  useEffect(() => {
    // 容器的高度
    const container = lyricWrapperRef.current!.getBoundingClientRect().height
    // 根据lyricIndex*34改变行高
    const scrollLineHeight = lyricIndex * lineHeight + lineHeight / 2
    // 要移动的距离
    let distance = scrollLineHeight - container / 2
    // 边界：可移动的最大距离
    const maxDistance = lyricInnerRef.current!.clientHeight - container
    // 边界判断
    if (distance < 0) {
      distance = 0
    }
    if (distance > maxDistance) {
      distance = maxDistance
    }
    // 设置滚动
    lyricInnerRef.current!.style.transform = `translateY(-${distance}px)`

    // 清除函数
    // return () => {}
  }, [lyricIndex])

  return (
    <PlaySonginfoWrapper>
      <div className="player_right">
        <div className="song_info">
          <a className="song_info_cover">
            <img className="song_info_pic" src={currentSong?.al?.picUrl} alt="" />
          </a>
          <div className="song_info_item song_info_name ellipsis">
            歌曲名：
            <a href="">{currentSong?.name}</a>
          </div>
          <div className="song_info_item song_info_singer ellipsis">
            歌手：
            <a href="">{currentSong?.ar?.[0]?.name}</a>
          </div>
          <div className="song_info_item song_info_album ellipsis">
            专辑：
            <a href="">{currentSong?.al?.name}</a>
          </div>
        </div>
        <div className="song_lyric">
          <div className="song_lyric_wrapper" ref={lyricWrapperRef}>
            <div className="song_lyric_inner" ref={lyricInnerRef}>
              {lyrics?.map((item, index) => (
                <p key={index} className={classNames({ on: index === lyricIndex })}>
                  <span>{item.text}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PlaySonginfoWrapper>
  )
}

PlayerSonginfo.displayName = 'PlayerSonginfo'

export default memo(PlayerSonginfo)
