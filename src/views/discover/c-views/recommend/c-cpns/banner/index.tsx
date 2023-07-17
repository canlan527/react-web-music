import React, { memo, useRef, useState } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { useAppSelector } from '@/store'

import { Carousel } from 'antd'
import Icon, { LeftOutlined, RightOutlined } from '@ant-design/icons'
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon'

import { BannerWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Banner: FC<IProps> = memo(() => {
  const [curIndex, setCurIndex] = useState(0)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const { banner } = useAppSelector((state) => ({
    banner: state.recommend.banner,
  }))
  // icon组件
  const IconPrev = () => <i className="iconfont icon-prev" onClick={handlePrev} />
  const IconNext = () => <i className="iconfont icon-next" onClick={handleNext} />

  // 事件处理函数
  function handlePrev() {
    bannerRef.current?.prev()
  }
  function handleNext() {
    bannerRef.current?.next()
  }
  function handleAfterChange(current: number) {
    setCurIndex(current)
  }
  // 获取背景图片
  let bgImageUrl = banner[curIndex]?.imageUrl
  if (bgImageUrl) {
    bgImageUrl = bgImageUrl + '?imageView&blur=40x20'
  }
  return (
    <BannerWrapper style={{ background: `url(${bgImageUrl}) center center / 6000px` }}>
      <Carousel ref={bannerRef} effect="fade" arrows prevArrow={<IconPrev />} nextArrow={<IconNext />} afterChange={handleAfterChange}>
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
