import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch, useAppSelector, appShallowEqual } from '@/store/index'
import { changeCounterAction } from '@/store/modules/demo'
interface IProps {
  children?: ReactNode
}

const Demo: FC<IProps> = () => {
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

  return (
    <div>
      <h1>Demo: </h1>
      <h2>react-redux RTK</h2>

      <h2>counter: {counter}</h2>
      <button onClick={handleClick}>修改文本</button>
      <hr />
    </div>
  )
}

Demo.displayName = 'Demo'

export default memo(Demo)
