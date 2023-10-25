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
        <div className="player_item player_content_wrapper">
          <div className="player_content">
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
                      <div className="col1 songlist_item_checkbox checked">
                        <input type="checkbox" />
                      </div>
                      <div className="songlist_item_number">1</div>

                      <div className="col2 songlist_item_songname ellipsis">
                        <a href="/" target="_blank" className="songlist_item_songname_mv"></a>
                        <span className="songlist_item_songname_text ellipsis">
                          <a href="/" target="_blank" className="">
                            乘风破浪第三季 张俪、王紫璇、于文文、张蔷、《野蔷薇》
                          </a>
                        </span>
                        <div className="songlist_item_songname_iconmenu">
                          <a href="/">
                            <i className="iconfont icon-like"></i>
                          </a>
                          <a href="/">
                            <i className="iconfont icon-play_circle"></i>
                          </a>
                          <a href="/">
                            <i className="iconfont icon-add_circle"></i>
                          </a>
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
                    <li className="songlist_item">
                      <div className="col1 songlist_item_checkbox">
                        <input type="checkbox" />
                      </div>
                      <div className="songlist_item_number">1</div>

                      <div className="col2 songlist_item_songname ellipsis">
                        <a href="/" target="_blank" className="songlist_item_songname_mv"></a>
                        <span className="songlist_item_songname_text ellipsis">
                          <a href="/" target="_blank" className="">
                            乘风破浪第三季 张俪、王紫璇、于文文、张蔷、《野蔷薇》
                          </a>
                        </span>
                        <div className="songlist_item_songname_iconmenu">
                          <a href="/">
                            <i className="iconfont icon-like"></i>
                          </a>
                          <a href="/">
                            <i className="iconfont icon-play_circle"></i>
                          </a>
                          <a href="/">
                            <i className="iconfont icon-add_circle"></i>
                          </a>
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
                    <li className="songlist_item">
                      <div className="col1 songlist_item_checkbox">
                        <input type="checkbox" />
                      </div>
                      <div className="songlist_item_number">1</div>

                      <div className="col2 songlist_item_songname ellipsis">
                        <a href="/" target="_blank" className="songlist_item_songname_mv"></a>
                        <span className="songlist_item_songname_text ellipsis">
                          <a href="/" target="_blank" className="">
                            乘风破浪第三季 张俪、王紫璇、于文文、张蔷、《野蔷薇》
                          </a>
                        </span>
                        <div className="songlist_item_songname_iconmenu">
                          <a href="/">
                            <i className="iconfont icon-like"></i>
                          </a>
                          <a href="/">
                            <i className="iconfont icon-play_circle"></i>
                          </a>
                          <a href="/">
                            <i className="iconfont icon-add_circle"></i>
                          </a>
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
            <div className="player_right">
              <div className="song_info">
                <a className="song_info_cover">
                  <img className="song_info_pic" src="https://y.qq.com/music/photo_new/T002R300x300M000001vZNL53OG2jp_1.jpg?max_age=2592000" alt="" />
                </a>
                <div className="song_info_item song_info_name ellipsis">
                  歌曲名：
                  <a href="">乘风破浪第三季 张俪、王紫璇、于文文、张蔷、《野蔷薇》</a>
                </div>
                <div className="song_info_item song_info_singer ellipsis">
                  歌手：
                  <a href="">乘风破浪三</a>
                </div>
                <div className="song_info_item song_info_album ellipsis">
                  专辑：
                  <a href="">乘风破浪 第三季| 姐姐们来了</a>
                </div>
              </div>
              <div className="song_lyric">
                <div className="song_lyric_wrapper">
                  <div className="song_lyric_inner">
                    <p>
                      <span>Produced by：Dave Jenkins Jr</span>
                    </p>
                    <p className="on">
                      <span>Mixed by：Dave Jenkins Jr</span>
                    </p>
                    <p>
                      <span>I don't need you riding white horses to my house</span>
                    </p>
                    <p>
                      <span>I don't need you buying red roses for my love</span>
                    </p>
                    <p>
                      <span>I don't need you riding white horses to my house</span>
                    </p>
                    <p>
                      <span>I don't need you buying red roses for my love</span>
                    </p>
                    <p>
                      <span>I don't need you riding white horses to my house</span>
                    </p>
                    <p>
                      <span>I don't need you buying red roses for my love</span>
                    </p>
                    <p>
                      <span>I don't need you riding white horses to my house</span>
                    </p>
                    <p>
                      <span>I don't need you buying red roses for my love</span>
                    </p>
                    <p>
                      <span>I don't need you riding white horses to my house</span>
                    </p>
                    <p>
                      <span>I don't need you buying red roses for my love</span>
                    </p>
                    <p>
                      <span>I don't need you riding white horses to my house</span>
                    </p>
                    <p>
                      <span>I don't need you buying red roses for my love</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="player_item player_footer">
          <a href="" className="btn_prev">
            <i className="iconfont"></i>
          </a>
          <a href="" className="btn_play">
            <i className="iconfont"></i>
          </a>
          <a href="" className="btn_next">
            <i className="iconfont"></i>
          </a>
          <div className="player_progress_control">
            <div className="player_music_info ellipsis">
              <a href="">Dear Santa</a> - <a href="">OneRepublic</a>
            </div>
            <div className="player_music_time">2:11 / 3:30</div>
            <div className="player_progress">
              <div className="player_progress__inner">
                <div className="player_progerss_load"></div>
                <div className="player_progerss_play">
                  <i className="player_progress_dot"></i>
                </div>
              </div>
            </div>
          </div>
          <a href="" className="btn_playmode">
            <i className="iconfont"></i>
          </a>
          <a href="" className="btn_like">
            <i className="iconfont"></i>
          </a>
          <a href="" className="btn_comment">
            <i className="iconfont"></i>
          </a>
          <div className="player_voice_control">
            <a href="" className="btn_voice"></a>
            <div className="player_vioce_inner">
              <div className="player_voice_progress">
                <i className="iconfont player_voice_dot"></i>
              </div>
            </div>
          </div>
        </div>
      </PlayerContainer>
    </PlayerWrapper>
  )
}

Player.displayName = 'Player'

export default memo(Player)
