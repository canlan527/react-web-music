import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AppFootterWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = () => {
  return (
    <AppFootterWrapper>
      <div className="app-footer-container">
        <div className="app-footer-top">
          <div className="app-footer-sec1">
            {/* <div className="sec1-title">你可以在这些平台上查看网站</div> */}
            <ul className="sec1-ul">
              <li className="sec1-item">
                <i className="iconfont icon-pc"></i>
                <span>PC版</span>
              </li>
              <li className="sec1-item">
                <i className="iconfont icon-ios"></i>
                <span>MAC版</span>
              </li>
              <li className="sec1-item">
                <i className="iconfont icon-android"></i>
                <span>android版</span>
              </li>
            </ul>
          </div>
          <div className="app-footer-sec1">
            {/* <div className="sec1-title">你可以在这些平台欣赏音乐</div> */}
            <ul className="sec1-ul">
              <li className="sec1-item">
                <i className="iconfont icon-67"></i>
                <span>音效</span>
              </li>
              <li className="sec1-item">
                <i className="iconfont icon-zhibo-01"></i>
                <span>直播</span>
              </li>
              <li className="sec1-item">
                <i className="iconfont icon-microphone-fill"></i>
                <span>K歌</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="app-footer-bottom">
          <p>
            <a>关于本站 | </a>
            <a>&nbsp;About WebSite| </a>
            <a>&nbsp;服务条款 | </a>
            <a>&nbsp;用户服务协议 | </a>
            <a>&nbsp;隐私政策 | </a>
            <a>&nbsp;联系开发者 | </a>
            <a href="www.github.canlan527.com">&nbsp;github</a>
          </p>
          <p>Copyright © 2023 Canlan527. All Rights Reserved.</p>
          <p></p>
        </div>
      </div>
    </AppFootterWrapper>
  )
}

AppFooter.displayName = 'AppFooter'

export default memo(AppFooter)
