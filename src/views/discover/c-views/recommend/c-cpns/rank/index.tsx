import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import AreaHeaderV1 from '@/components/area-header-v1'

import { RankWrapper } from './style'
import { useAppSelector } from '@/store'
import RankList from '@/views/discover/c-cpns/rank-list'

interface IProps {
  children?: ReactNode
}

const Rank: FC<IProps> = () => {
  const { rankList } = useAppSelector((state) => ({
    rankList: state.recommend.rankList,
  }))

  return (
    <RankWrapper>
      <AreaHeaderV1 title="排行榜" moreLink="/discover/ranking" />
      <div className="rank-list">
        {rankList.map((item) => (
          <RankList key={item.id} item={item}></RankList>
        ))}
      </div>
    </RankWrapper>
  )
}

Rank.displayName = 'Rank'

export default memo(Rank)
