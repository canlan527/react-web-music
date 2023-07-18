import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector, appShallowEqual } from '@/store/index'

interface IProps {
  children?: ReactNode
}

const Hot: FC<IProps> = memo(() => {
  // 从rtk里拿数据
  const { hot } = useAppSelector(
    (state) => ({
      hot: state.recommend.hot,
    }),
    appShallowEqual
  )

  return (
    <HotWrapper>
      <AreaHeaderV1 title="热门推荐" keylist={['华语', '民谣', '摇滚', '流行', '电子']} moreLink="/discover/songs" />
      <div className="hot-recommend">
        {hot.map((item) => (
          <div className="hot-item" key={item.id}>
            <div className="item-top">
              <div className="item-img">
                <i className="iconfont icon-play"></i>
                <img src={item.picUrl} alt="" />
              </div>
            </div>
            <div className="item-bottom">
              <span className="item-title">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </HotWrapper>
  )
})
Hot.displayName = 'Hot'

export default Hot
