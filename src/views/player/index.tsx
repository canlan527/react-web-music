import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PlayerWrapper, PlayerContainer } from './style'

interface IProps {
  children?: ReactNode
}

const Player: FC<IProps> = () => {
  return (
    <PlayerWrapper>
      <div className="player-header-logo">X Muscial</div>
      <div className="player-header-login">登录</div>
      <div className="player-mask"></div>
      <div className="player-bg-img"></div>
      <PlayerContainer>
        <div className="player_item player_header"></div>
        <div className="player_item player_content">
          <div className="player_left">
            <div className="player_toolbar">
              <div className="toolbar_button">
                <i className="iconfont icon-shoucang"></i>
                <span>收藏</span>
              </div>
              <div className="toolbar_button">
                <i className="iconfont icon-tianjia"></i>
                <span>添加到</span>
              </div>
              <div className="toolbar_button">
                <i className="iconfont icon-shanchu"></i>
                <span>删除</span>
              </div>
              <div className="toolbar_button">
                <i className="iconfont icon-shoucang"></i>
                <span>清空列表</span>
              </div>
            </div>
            <div className="player_songlist_box">
              <div className="player_songlist">
                <ul className="player_songlist_header"></ul>
                <ul className="player_songlist_content">
                  <li className="songlist_item"></li>
                  <li className="songlist_item"></li>
                  <li className="songlist_item"></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="player_right"></div>
        </div>
        <div className="player_item player_footer"></div>
      </PlayerContainer>
    </PlayerWrapper>
  )
}

Player.displayName = 'Player'

export default memo(Player)
