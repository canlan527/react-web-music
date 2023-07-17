import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderV1Wrapper } from './style'

interface IProps {
  children?: ReactNode
}

const AreaHeaderV1: FC<IProps> = memo(() => {
  const keylist = ['为你推荐', '华语', '流行']
  return (
    <HeaderV1Wrapper>
      <h2 className="hot-title">热门推荐</h2>
      <div className="hot-keylist">
        <div className="keywords">
          {keylist.map((item, index) => (
            <div className="item" key={index}>
              {item}
            </div>
          ))}
        </div>
        <div className="more">
          <a className="more-text" href="">
            更多
          </a>
          <i className="iconfont icon-next"></i>
        </div>
      </div>
    </HeaderV1Wrapper>
  )
})
AreaHeaderV1.displayName = 'AreaHeaderV1'

export default AreaHeaderV1
