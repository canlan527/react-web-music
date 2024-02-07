import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankListWrapper, RankSong } from './style'
import rankDefaultBg from '@/assets/imgs/rank_defalut_bg.jpg'
import { useAppDispatch } from '@/store'
import { fetchCurrentSongAction } from '@/store/modules/player'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  item: ItemType
}

type ItemType = {
  name?: string
  tracks?: any
  coverImgUrl?: string
}

const RankList: FC<IProps> = (props) => {
  const { item } = props
  const { tracks, coverImgUrl } = item

  const dispatch = useAppDispatch()
  // 点击播放歌曲
  function handlePlaySong(id: number) {
    dispatch(fetchCurrentSongAction(id))
  }

  return (
    <RankListWrapper bgimg={coverImgUrl || rankDefaultBg}>
      <div className="rank-list-container">
        <div className="rank-list-top">
          <div className="rank-top-title">巅峰榜</div>
          <div className="rank-title ellipsis">{item.name}</div>
        </div>
        <div className="rank-list-content">
          {tracks.slice(0, 10).map((song: any, index: number) => (
            <RankSong key={song.id} onClick={() => handlePlaySong(song.id)}>
              <Link to={`/player/${song.id}`}>
                <div className="rank-number">{index + 1}</div>
                <div className="rank-song-name ellipsis">{song.name}</div>
              </Link>
            </RankSong>
          ))}
        </div>
      </div>
    </RankListWrapper>
  )
}

RankList.displayName = 'RankList'

export default memo(RankList)
