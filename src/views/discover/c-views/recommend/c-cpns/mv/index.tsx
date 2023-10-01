import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppSelector } from '@/store'
import AreaHeaderV1 from '@/components/area-header-v1'

import { formatterNumber } from '@/utils'

import { MVWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const MV: FC<IProps> = () => {
  const { mvList } = useAppSelector((state) => ({
    mvList: state.recommend.mvList,
  }))

  return (
    <MVWrapper>
      <AreaHeaderV1 title="MV精选" hasMore={false}></AreaHeaderV1>
      <div className="mv-list">
        {mvList.map((item) => (
          <div key={item.id} className="mv-list-item">
            <div className="mv-item-top">
              <div className="mv-item-img">
                <img src={item.picUrl} alt="" />
              </div>
              <div className="mv-item-desc">{item.copywriter}</div>
            </div>
            <div className="mv-item-bottom">
              <div className="mv-item-name item">{item.name}</div>
              <div className="mv-item-singer item">{item.artistName}</div>
              <div className="mv-item-playcount-box item">
                播放量：
                <i className="iconfont icon-shipinbofang"></i>
                <span className="mv-item-playcount">{formatterNumber(item.playCount)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MVWrapper>
  )
}

MV.displayName = 'MV'

export default memo(MV)
