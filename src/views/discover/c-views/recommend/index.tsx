import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch, useAppSelector } from '@/store'
import { fetchBannersDataAction } from '@/store/modules/recommend'
import { RecommendWrapper, BannerSection } from './style'
import { Carousel } from 'antd'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  // 发起action（获取数据）
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchBannersDataAction())
  }, [])

  // 从rtk里拿数据
  const { banner } = useAppSelector((state) => ({
    banner: state.recommend.banner,
  }))

  return (
    <RecommendWrapper>
      <BannerSection>
        <Carousel effect="fade">
          {banner.map((item) => (
            <div key={item.imageUrl}>
              <img src={item.imageUrl} alt="" />
            </div>
          ))}
        </Carousel>
      </BannerSection>
    </RecommendWrapper>
  )
}

Recommend.displayName = 'Recommend'

export default memo(Recommend)
