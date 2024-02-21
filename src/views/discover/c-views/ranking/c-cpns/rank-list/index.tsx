import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'

import { RankListWrapper } from './style'
import { formatterDuration } from '@/utils'

interface IProps {
  children?: ReactNode
  listData: any
}

const RankList: FC<IProps> = (props) => {
  // 属性数据
  const { listData } = props

  useEffect(() => {
    console.log(listData)
  })

  return (
    <RankListWrapper>
      <li className="ranklist_bar">
        <div className="col1">歌曲</div>
        <div className="col2">歌手</div>
        <div className="col3">时长</div>
      </li>
      {listData.slice(0, 20).map((item: any, index: number) => (
        <li key={index} className="rank_item">
          <div className="rank_number">{index + 1}</div>
          <div className="rank_coverimg">
            <img src={`${item.al.picUrl}?param=70y70`} alt="" />
          </div>
          <div className="rank_songname">{item.name}</div>
          <div className="rank_singer">{item.ar[0].name}</div>
          <div className="rank_duration">{formatterDuration(item.dt)}</div>
        </li>
      ))}
    </RankListWrapper>
  )
}

RankList.displayName = 'RankList'

export default memo(RankList)
