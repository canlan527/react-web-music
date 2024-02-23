import React, { memo, useState, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { appShallowEqual, useAppDispatch, useAppSelector } from '@/store'

import { Tabs, ConfigProvider } from 'antd'
import RankList from './c-cpns/rank-list'

import { RankingWrapper } from './style'
import { fetchRankListAction } from '@/store/modules/recommend'

interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = () => {
  // 组件内数据
  const [ready, setReady] = useState(false)

  // 从rtk中取数据
  const { ranklist } = useAppSelector(
    (state) => ({
      ranklist: state.recommend.rankList,
    }),
    appShallowEqual
  )

  // 获取dispatch
  const dispatch = useAppDispatch()

  useEffect(() => {
    // 设置ready
    if (ranklist.length > 0) {
      setReady(true)
    } else {
      dispatch(fetchRankListAction())
    }

    // 组件销毁清除函数
    ;() => {
      setReady(false)
    }
  }, [ranklist])

  // function contentRender() {}

  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            /* 这里是你的组件 token */
            // cardPadding: '24px 36px',
            // horizontalMargin: '16px 30px 36px 32px',
            // itemActiveColor: '#fff',
            // itemColor: '#333',
            itemHoverColor: '#31C27C',
            itemSelectedColor: '#31C27C',
            inkBarColor: '#31C27C',
            titleFontSize: 16,
            // verticalItemMargin: '36px 0 0 0',
            // verticalItemPadding: '36px 54px',
          },
        },
      }}
    >
      <RankingWrapper>
        {ready ? (
          <Tabs
            defaultActiveKey="1"
            tabPosition="left"
            items={ranklist.map((item, i) => {
              const { name, id, coverImgUrl, description, tracks } = item
              return {
                label: name,
                key: id,
                disabled: i === 5,
                children: <RankList listData={tracks} />,
                // children: tracks.map((_songItem: any, index: number) => <RankList key={index} songItem={_songItem} />),
              }
            })}
          />
        ) : (
          ''
        )}
      </RankingWrapper>
    </ConfigProvider>
  )
}

Ranking.displayName = 'Ranking'

export default memo(Ranking)
