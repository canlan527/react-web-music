import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import { fetchBannersDataAction } from '@/store/modules/recommend'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  // 发起action（获取数据）
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchBannersDataAction())
  }, [])

  return <div>Recommend</div>
}

Recommend.displayName = 'Recommend'

export default memo(Recommend)
