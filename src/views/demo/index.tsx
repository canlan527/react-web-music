import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch, useAppSelector, appShallowEqual } from '@/store/index'
import { changeCounterAction } from '@/store/modules/demo'
import request from '../../services'
interface IProps {
  children?: ReactNode
}
interface IBannerData {
  imageUrl: string
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
  url: any
  exclusive: boolean
  scm: string
  bannerBizType: string
}
const Demo: FC<IProps> = () => {
  const [arr, setArr] = useState<IBannerData[]>([])
  const { counter } = useAppSelector(
    (state) => ({
      counter: state.demo.counter,
    }),
    appShallowEqual
  )

  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(changeCounterAction(1))
  }

  useEffect(() => {
    request.get({ url: '/banner' }).then((res) => {
      setArr(res.data.banners)
    })
  }, [])

  return (
    <div>
      <h1>Demo: </h1>
      <h2>react-redux RTK</h2>

      <h2>counter: {counter}</h2>
      <button onClick={handleClick}>修改文本</button>
      <div>
        {arr.map((item, index) => (
          <div key={item.imageUrl}>{item.imageUrl}</div>
        ))}
      </div>
      <hr />
    </div>
  )
}

Demo.displayName = 'Demo'

export default memo(Demo)
