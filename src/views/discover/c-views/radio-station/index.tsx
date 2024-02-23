import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { appShallowEqual, useAppDispatch, useAppSelector } from '@/store'
import { fetchRadioAction } from '@/store/modules/radio'

import { Pagination } from 'antd'
import type { PaginationProps } from 'antd'

import SongsItemV1 from '@/components/songs-item-v1'

import { RadioWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const RadioStation: FC<IProps> = () => {
  const [current, setCurrent] = useState(1)
  // const [page, setPage] = useState(0)
  // const [total, setTotal] = useState(0)

  // 从rtk拿取数据
  const { radiolist, limit } = useAppSelector(
    (state) => ({
      radiolist: state.radio.radiolist,
      limit: state.radio.limit,
    }),
    appShallowEqual
  )

  // fetch数据
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchRadioAction(0))
  }, [])

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrent(page)
    dispatch(fetchRadioAction(page))
    // total = page * limit 总条数 = 页数 * 每页条数
    // const total = page * limit
    // setTotal(total)
  }

  return (
    <RadioWrapper>
      <div className="section_title">热门电台</div>
      <div className="radio_list">
        {radiolist.map((item) => (
          <div key={item.id} className="radio_list_item">
            <SongsItemV1 item={item} />
          </div>
        ))}
      </div>
      <Pagination onChange={onChange} total={600} pageSize={28} />
    </RadioWrapper>
  )
}

RadioStation.displayName = 'RadioStation'

export default memo(RadioStation)
