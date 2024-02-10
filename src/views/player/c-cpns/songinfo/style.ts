import styled from 'styled-components'

export const PlaySonginfoWrapper = styled.div`
  .player_right {
    position: absolute;
    top: 0;
    right: 0;
    width: 340px;
    height: 100%;
    text-align: center;
    line-height: 24px;
    font-size: 14px;
    .song_info {
      .song_info_item {
        width: 100%;
        height: 28px;
        font-size: 14px;
        &:hover {
          color: #fff;
        }
        &:hover a {
          color: #fff;
        }
        a {
          font-size: 14px;
        }
      }
      .song_info_cover {
        position: relative;
        display: block;
        width: 186px;
        height: 186px;
        margin: auto;
        cursor: pointer;
        &:after {
          content: '';
          position: absolute;
          left: 9px;
          top: 0;
          width: 201px;
          height: 180px;
          background: url(https://y.qq.com/ryqq/static/media/album_cover_player.8dfd80d6.png?max_age=2592000) 0 0 no-repeat;
        }
        .song_info_pic {
          vertical-align: middle;
          width: 186px;
          height: 186px;
        }
      }
      .song_info_name {
        margin-top: 15px;
      }
    }
    .song_lyric,
    .song_lyric_wrapper {
      position: absolute;
      left: 0;
      overflow: hidden;
    }
    .song_lyric {
      top: 320px;
      bottom: 50px;
      width: 100%;
      padding-top: 20px;
      -webkit-mask-image: linear-gradient(
        180deg,
        hsla(0, 0%, 100%, 0) 0,
        hsla(0, 0%, 100%, 0.6) 15%,
        #fff 25%,
        #fff 75%,
        hsla(0, 0%, 100%, 0.6) 85%,
        hsla(0, 0%, 100%, 0)
      );
      .song_lyric_wrapper {
        right: 0;
        bottom: 0;
        cursor: -webkit-grab;
        margin-right: -30px;
        overflow-y: auto;
        top: 80%;
        margin-top: -204px;
        .song_lyric_inner {
          margin-right: 30px;
          line-height: 34px;
          transition: all 0.2s;
          scroll-behavior: smooth;
          .on {
            color: #31c27c;
          }
        }
      }
    }
  }
`
