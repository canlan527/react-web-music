import styled from 'styled-components'

interface IPlayProgressWrapper {
  $isplaying: boolean
}

export const PlayProgressWrapper = styled.div<IPlayProgressWrapper>`
  .player_footer {
    bottom: 0;
    left: 0;
    height: 11%;

    .iconfont {
      font: 0/0 a;
    }

    .btn_prev,
    .btn_play,
    .btn_next,
    .btn_playmode,
    .btn_like,
    .btn_comment,
    .btn_voice,
    .player_voice_dot,
    .player_progress_dot {
      position: absolute;
      background-image: -webkit-image-set(
        url(https://y.qq.com/ryqq/static/media/player.a628799e.png?max_age=2592000) 1x,
        url(https://y.qq.com/ryqq/static/media/player@2x.41e8450a.png?max_age=2592000) 2x
      );
      opacity: 0.8;
    }

    .btn_prev:hover,
    .btn_play:hover,
    .btn_next:hover,
    .btn_playmode:hover,
    .btn_like:hover,
    .btn_comment:hover,
    .btn_voice:hover {
      opacity: 1;
      filter: none;
    }

    .btn_prev {
      top: 4px;
      left: 0;
      width: 19px;
      height: 20px;
      background-position: 0 -30px;
    }
    .btn_play {
      top: 0;
      left: 65px;
      width: 21px;
      height: 29px;
      background-position: ${(props) => (props.$isplaying ? '-30px' : 0)} 0;
    }
    .btn_next {
      top: 4px;
      left: 132px;
      width: 19px;
      height: 20px;
      background-position: 0 -52px;
    }
    .player_progress_control {
      position: relative;
      margin: 0 448px 0 208px;
      .player_music_info {
        padding-right: 90px;
        a:hover {
          color: #fff;
          cursor: pointer;
        }
      }
      .player_music_time {
        position: absolute;
        top: 0;
        right: 0;
      }
      .player_progress {
        padding-top: 6px;
        height: 8px;
        cursor: pointer;
        .player_progress__inner {
          position: relative;
          height: 2px;
          background: hsla(0, 0%, 100%, 0.1);
          .player_progerss_load {
            width: 100.48%;
            margin-left: 0px;
            height: 2px;
            background: hsla(0, 0%, 100%, 0.2);
          }
          .player_progerss_play {
            width: 77.47%;
            margin-left: 0px;
            position: absolute;
            top: 0;
            left: 0;
            height: 2px;
            background: hsla(0, 0%, 100%, 0.7);
            .player_progress_dot {
              top: -4px;
              right: -4px;
              width: 10px;
              height: 10px;
              background-position: 0 -170px;
              opacity: 1;
              filter: none;
            }
          }
        }
      }
    }
    .btn_playmode {
      top: 4px;
      right: 378px;
      width: 25px;
      height: 19px;
      background-position: 0 -74px;
    }
    .btn_like {
      top: 4px;
      right: 330px;
      width: 23px;
      height: 21px;
      background-position: 0 -96px;
    }
    .btn_comment {
      top: 3px;
      right: 280px;
      width: 24px;
      height: 24px;
      background-position: 0 -400px;
    }
    .btn_comment99 {
      background-position: 0 -430px;
    }
    .player_voice_control {
      position: absolute;
      top: 0;
      right: 148px;
      width: 80px;
      padding-top: 13px;
      height: 8px;
      cursor: pointer;
      .btn_voice {
        top: 4px;
        left: -31px;
        width: 26px;
        height: 21px;
        background-position: 0 -144px;
      }
      .player_vioce_inner {
        position: relative;
        height: 2px;
        background: hsla(0, 0%, 100%, 0.1);
        .player_voice_progress {
          position: absolute;
          top: 0;
          left: 0;
          height: 2px;
          background: hsla(0, 0%, 100%, 0.7);
          width: 50%;
          .player_voice_dot {
            top: -4px;
            right: -4px;
            width: 10px;
            height: 10px;
            background-position: 0 -170px;
            opacity: 1;
            filter: none;
          }
        }
      }
    }
  }
`
