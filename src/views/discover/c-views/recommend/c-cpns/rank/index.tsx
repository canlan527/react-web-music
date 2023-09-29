import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import AreaHeaderV1 from '@/components/area-header-v1'

import { RankWrapper } from './style'
import { useAppSelector } from '@/store'

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
      {rankList.map((item) => (
        <h1 key={item.id}>{item.name}</h1>
      ))}
    </RankWrapper>
  )
}

Rank.displayName = 'Rank'

export default memo(Rank)
