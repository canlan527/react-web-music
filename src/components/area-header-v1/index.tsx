import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { HeaderV1Wrapper } from './style'

interface IProps {
  children?: ReactNode
  title?: string
  keylist?: string[]
  hasMore?: boolean
  moreLink?: string
}

const AreaHeaderV1: FC<IProps> = memo((props: IProps) => {
  const { title = '默认标题', keylist = [], hasMore = true, moreLink = '/' } = props
  return (
    <HeaderV1Wrapper>
      <h2 className="hot-title">{title}</h2>
      <div className="hot-keylist">
        <div className="keywords">
          {keylist.map((item, index) => (
            <div className="item" key={index}>
              {item}
            </div>
          ))}
        </div>
        {hasMore ? (
          <div className="more">
            <Link className="more-text" to={moreLink}>
              更多
            </Link>
            <i className="iconfont icon-next"></i>
          </div>
        ) : null}
      </div>
    </HeaderV1Wrapper>
  )
})
AreaHeaderV1.displayName = 'AreaHeaderV1'

export default AreaHeaderV1
