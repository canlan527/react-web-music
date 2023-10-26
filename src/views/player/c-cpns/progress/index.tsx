import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PlayProgressWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const PlayerProgress: FC<IProps> = () => {
  return (
    <PlayProgressWrapper>
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
    </PlayProgressWrapper>
  )
}

PlayerProgress.displayName = 'PlayerProgress'

export default memo(PlayerProgress)
