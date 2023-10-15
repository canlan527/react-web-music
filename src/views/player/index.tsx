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
                <ul className="player_songlist_header">
                  <li className="col1 songlist_header_checkbox">
                    <input type="checkbox" />
                  </li>
                  <li className="col2 songlist_header_name">歌曲</li>
                  <li className="col3 songlist_header_author">歌手</li>
                  <li className="col4 songlist_header_time">时长</li>
                </ul>
                <ul className="player_songlist_content">
                  <li className="songlist_item">
                    <div className="col1">
                      <div className="songlist_item_checkbox">
                        <input type="checkbox" />
                      </div>
                      <div className="songlist_item_number">1</div>
                    </div>

                    <div className="col2 songlist_item_songname">
                      <div className="songlist_item_songname_left ellipsis">
                        <a href="/" target="_blank" className="songlist_item_songname_text">
                          乘风破浪第三季 张俪、王紫璇、于文文、张蔷、《野蔷薇》
                        </a>
                        <a href="/" target="_blank" className="songlist_item_songname_mv">
                          MV
                        </a>
                      </div>
                      <div className="songlist_item_songname_iconmenu">
                        <i className="iconfont icon-like"></i>
                        <i className="iconfont icon-play_circle"></i>
                        <i className="iconfont icon-add_circle"></i>
                      </div>
                    </div>
                    <div className="col3 songlist_item_artist ellipsis">
                      <a href="/" target="_blank">
                        于文文/刘恋/赵梦/张蔷/唐诗逸
                      </a>
                    </div>
                    <div className="col4 songlist_item_time">
                      <span className="sontlist_item_time_text">3:30</span>
                      <i className="iconfont icon-delete-circle"></i>
                    </div>
                  </li>
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
