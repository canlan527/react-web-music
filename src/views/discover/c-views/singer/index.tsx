import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { appShallowEqual, useAppDispatch, useAppSelector } from '@/store'
import { fetchSingerlistAction } from '@/store/modules/singer'

import { SingerWrapper } from './style'
import Avatar from '@/components/avatar'

interface IProps {
  children?: ReactNode
}

const Singer: FC<IProps> = () => {
  // 获取dispatch
  const dispatch = useAppDispatch()

  // 发送歌手请求数据
  useEffect(() => {
    dispatch(fetchSingerlistAction())
  }, [])

  // 获取rtk数据
  const { singerlist } = useAppSelector(
    (state) => ({
      singerlist: state.singer.singerlist,
    }),
    appShallowEqual
  )

  return (
    <SingerWrapper>
      <div className="singer_title">热门歌手</div>
      <div className="singerlist_hot">
        {singerlist.slice(0, 10).map((item) => (
          <div className="avatar-container" key={item.id}>
            <Avatar picUrl={item.picUrl} name={item.name} />
          </div>
        ))}
      </div>
      <div className="singerlist_common">
        {singerlist.slice(10, singerlist.length + 1).map((item, index) => (
          <span key={index} className="ellipsis">
            {item.name}
          </span>
        ))}
      </div>
    </SingerWrapper>
  )
}

Singer.displayName = 'Singer'

export default memo(Singer)
