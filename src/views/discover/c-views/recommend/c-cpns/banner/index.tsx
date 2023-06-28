import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppSelector } from '@/store'

import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

import { BannerWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Banner: FC<IProps> = memo(() => {
  const { banner } = useAppSelector((state) => ({
    banner: state.recommend.banner,
  }))
  return (
    <BannerWrapper>
      <Carousel effect="fade" arrows prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}>
        {banner.map((item) => (
          <div key={item.imageUrl}>
            <img src={item.imageUrl} alt="" />
          </div>
        ))}
      </Carousel>
    </BannerWrapper>
  )
})
Banner.displayName = 'Banner'

export default Banner
