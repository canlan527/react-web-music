import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch, useAppSelector } from '@/store'
import {
  fetchBannersDataAction,
  fetchHotDataAction,
  fetchMVListAction,
  fetchNewAlbumAction,
  fetchNewSongListAction,
  fetchRankListAction,
} from '@/store/modules/recommend'
import { RecommendWrapper } from './style'

import Banner from './c-cpns/banner'
import Hot from './c-cpns/hot/index'
import New from './c-cpns/new'
import Rank from './c-cpns/rank'
import MV from './c-cpns/mv'
import NewSong from './c-cpns/newSong'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  // 发起action（获取数据）
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchBannersDataAction())
    dispatch(fetchHotDataAction())
    dispatch(fetchNewAlbumAction())
    dispatch(fetchRankListAction())
    dispatch(fetchMVListAction())
    dispatch(fetchNewSongListAction())
  }, [])

  // 从rtk里拿数据

  return (
    <RecommendWrapper>
      <Banner />
      <Hot />
      <NewSong />
      <New />
      <MV />
      <Rank />
      {/* <div>其他东西</div> */}
    </RecommendWrapper>
  )
}

Recommend.displayName = 'Recommend'

export default memo(Recommend)
