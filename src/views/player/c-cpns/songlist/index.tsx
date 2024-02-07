import React, { memo, startTransition, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { PlaySonglistWrapper } from './style'
import { appShallowEqual, useAppDispatch, useAppSelector } from '@/store'
import { fetchCurrentSongAction } from '@/store/modules/player'
import { formatterDuration } from '@/utils'
import classNames from 'classnames'

interface IProps {
  children?: ReactNode
  currentSong?: any
}

const PlayerSonglist: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()

  // 从 rtk 里拿数据
  const { playlist, playsongIndex } = useAppSelector(
    (state) => ({
      playlist: state.player.playsongList,
      playsongIndex: state.player.playsongIndex,
    }),
    appShallowEqual
  )
  // 获取某一首歌曲
  useEffect(() => {
    console.log(playsongIndex)
    // startTransition(() => {
    //   dispatch(fetchCurrentSongAction(2089113495))
    // })
  }, [])

  // 组件内部事件
  // 点击播放歌曲
  function handlePlaySong(id: number) {
    dispatch(fetchCurrentSongAction(id))
    console.log(playsongIndex)
  }

  return (
    <PlaySonglistWrapper>
      <div className="player_left">
        <div className="player_toolbar">
          <div className="toolbar_button">
            <i className="iconfont icon-shoucang"></i>
            <span>收藏</span>
          </div>
          <div className="toolbar_button">
            <i className="iconfont icon-tianjia"></i>
            <span>添加到</span>
          </div>
          <div className="toolbar_button">
            <i className="iconfont icon-shanchu"></i>
            <span>删除</span>
          </div>
          <div className="toolbar_button">
            <i className="iconfont icon-shoucang"></i>
            <span>清空列表</span>
          </div>
        </div>
        <div className="player_songlist_box">
          <div className="player_songlist">
            <ul className="player_songlist_header">
              <li className="col1 songlist_header_checkbox">
                <input type="checkbox" />
              </li>
              <li className="col2 songlist_header_name">歌曲</li>
              <li className="col3 songlist_header_author">歌手</li>
              <li className="col4 songlist_header_time">时长</li>
            </ul>
            <ul className="player_songlist_content">
              {playlist.map((item, index) => (
                <li key={item.id} className={classNames('songlist_item', { active: playsongIndex === index })}>
                  <div className="col1 songlist_item_checkbox">
                    <input type="checkbox" />
                  </div>
                  <div className="songlist_item_number">{index + 1}</div>

                  <div className="col2 songlist_item_songname ellipsis">
                    {item.mv && <a target="_blank" className="songlist_item_songname_mv"></a>}
                    <span className="songlist_item_songname_text ellipsis" onClick={() => handlePlaySong(item.id)}>
                      <a className="">{item.name}</a>
                    </span>
                    <div className="songlist_item_songname_iconmenu">
                      <a href="/">
                        <i className="iconfont icon-like"></i>
                      </a>
                      <a href="/">
                        <i className="iconfont icon-play_circle"></i>
                      </a>
                      <a href="/">
                        <i className="iconfont icon-add_circle"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col3 songlist_item_artist ellipsis">
                    <a href="/" target="_blank">
                      {item.ar[0]!.name}
                    </a>
                  </div>
                  <div className="col4 songlist_item_time">
                    <span className="sontlist_item_time_text">{formatterDuration(item.dt)}</span>
                    <i className="iconfont icon-delete-circle"></i>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PlaySonglistWrapper>
  )
}

PlayerSonglist.displayName = 'PlayerSonglist'

export default memo(PlayerSonglist)
