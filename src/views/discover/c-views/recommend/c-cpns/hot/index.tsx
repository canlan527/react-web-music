import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import PropTypes from 'prop-types'
import { HotWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector, appShallowEqual } from '@/store/index'
import SongsItemV1 from '@/components/songs-item-v1'

interface IProps {
  children?: ReactNode
}

const Hot: FC<IProps> = memo(() => {
  const [curIndex, setCurIndex] = useState(0)
  // 从rtk里拿数据
  const { hot } = useAppSelector(
    (state) => ({
      hot: state.recommend.hot,
    }),
    appShallowEqual
  )

  return (
    <HotWrapper>
      <AreaHeaderV1 activeIndex={curIndex} title="热门推荐" keylist={['华语', '民谣', '摇滚', '流行', '电子']} moreLink="/discover/songs" />
      <div className="hot-recommend">
        {hot.map((item) => (
          <SongsItemV1 item={item} key={item.id} />
        ))}
      </div>
    </HotWrapper>
  )
})
Hot.displayName = 'Hot'

export default Hot
