import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { appShallowEqual, useAppDispatch, useAppSelector } from '@/store'
import { fetchPlaylistAction } from '@/store/modules/playlist'

import { Pagination } from 'antd'
import type { PaginationProps } from 'antd'

import SongsItemV1 from '@/components/songs-item-v1'
import { SonglistWrapper } from './style'

interface IProps {
  children?: ReactNode
}
// 歌单组件
const Songlist: FC<IProps> = () => {
  const [current, setCurrent] = useState(1)
  // 从rtk拿取数据
  const { playlist } = useAppSelector(
    (state) => ({
      playlist: state.playlist.playlist,
    }),
    appShallowEqual
  )

  // 拿取dispatch
  const dispatch = useAppDispatch()

  // 发送请求
  useEffect(() => {
    dispatch(fetchPlaylistAction(0))
  }, [])

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrent(page)
    dispatch(fetchPlaylistAction(page))
  }

  return (
    <SonglistWrapper>
      <div className="section_title">热门歌单</div>
      <div className="songlist_container">
        {playlist.map((item) => (
          <div key={item.id} className="songlist_item">
            <SongsItemV1 item={item} />
          </div>
        ))}
      </div>
      <Pagination onChange={onChange} total={660} pageSize={28} />
    </SonglistWrapper>
  )
}

Songlist.displayName = 'Songlist'

export default memo(Songlist)
