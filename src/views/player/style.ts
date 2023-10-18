import styled from 'styled-components'

export const PlayerWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  color: grey;
  background-color: #333;
  padding: 32px 80px;
  box-sizing: border-box;
  .player-header-logo {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 3;
    font-size: 40px;
    cursor: pointer;
  }
  .player-header-login {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 20px;
    cursor: pointer;
  }
  .player-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.35);
    z-index: 2;
  }
  .player-bg-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    filter: blur(65px);
    opacity: 0.6;
    transform: translateZ(0);
    background-image: url(https://y.qq.com/music/photo_new/T002R300x300M0000012rYco2WSh8e.jpg?max_age=2592000);
    background-color: rgb(255, 255, 255);
  }
`

export const PlayerContainer = styled.div`
  position: relative;
  height: 100%;
  color: hsla(0, 0%, 88.2%, 0.8);
  font-size: 14px;
  margin: 0 7.6%;
  z-index: 3;
  .player_item {
    position: absolute;
    width: 100%;
  }
  .player_content {
    display: flex;
    top: 11%;
    bottom: 18%;
    min-height: 328px;
    color: hsla(0, 0%, 88.2%, 0.8);
    cursor: default;
    .player_left {
      flex: 1;
      overflow: hidden;
      margin-right: 50px;
      .player_toolbar {
        display: flex;
        justify-content: start;
        align-items: center;
        width: 100%;
        margin-bottom: 12px;
        .toolbar_button {
          background-color: transparent;
          opacity: 0.8;
          border: 1px solid #c9c9c9;
          border-color: hsla(0, 0%, 100%, 0.2);
          min-width: 122px;
          text-align: center;
          border-radius: 2px;
          margin-right: 8px;
          padding: 0 23px;
          height: 38px;
          line-height: 38px;
          display: inline-block;
          white-space: nowrap;
          box-sizing: border-box;
          overflow: hidden;
          &:hover {
            border-color: #fff;
            cursor: pointer;
          }
          &:hover span {
            color: #fff;
          }
          &:hover i.iconfont {
            color: #fff;
          }
          .iconfont {
            color: hsla(0, 0%, 100%, 0.2);
            font-size: 16px;
            font-weight: bolder;
            margin-right: 4px;
          }
          span {
            color: #bdbdbe;
          }
        }
      }
      .player_songlist_box {
        width: 100%;

        .player_songlist {
          height: 756px;
          color: hsla(0, 0%, 88.2%, 0.8);
          a {
            color: hsla(0, 0%, 88.2%, 0.8);
            &:hover {
              color: #fff;
            }
          }
          /* col1 - col4 样式 */
          li {
            height: 50px;
            line-height: 50px;
          }
          .player_songlist_header,
          .songlist_item {
            position: relative;
            padding-right: 95px;
            padding-left: 62px;
          }
          .col1 {
            display: block;
            position: absolute;
            left: 0;
            top: 50%;
            margin-top: -9px;
            width: 14px;
            height: 14px;
            line-height: 14px;
            border: 1px solid hsla(0, 0%, 88.2%, 0.2);
            background-position: -1000px;
            background-image: -webkit-image-set(
              url(https://y.qq.com/ryqq/static/media/icon_sprite.630b3e60.png?max_age=2592000) 1x,
              url(https://y.qq.com/ryqq/static/media/icon_sprite@2x.bf4cef49.png?max_age=2592000) 2x
            );

            input {
              width: 14px;
              height: 14px;
              opacity: 0;
            }
          }
          .col2 {
            position: relative;
            float: left;
            white-space: normal;
            width: 68%;
            height: 50px;
            line-height: 50px;
          }
          .col3 {
            width: 26%;
            float: left;
            padding-left: 15px;
            box-sizing: border-box;
          }
          .col4 {
            position: absolute;
            top: 0;
            right: 38px;
            width: 50px;
          }
          .player_songlist_header {
            height: 50px;
            line-height: 50px;
          }
          .player_songlist_content {
            .songlist_item {
              clear: both;
              font-size: 0;
              overflow: hidden;
              &:hover .songlist_item_songname .songlist_item_songname_iconmenu {
                opacity: 1;
                transform: translateY(-25px);
              }
              &:hover .songlist_item_songname .songlist_item_songname_text {
                max-width: 50%;
              }
              &:hover .songlist_item_songname .songlist_item_songname_text:first-child {
                max-width: 50%;
              }
              &:hover .songlist_item_time .sontlist_item_time_text {
                display: none;
              }
              &:hover .songlist_item_time .iconfont {
                display: block;
              }
              &:nth-child(even) {
                background-color: rgba(0, 0, 0, 0.01);
              }
              .songlist_item_number {
                position: absolute;
                top: 0;
                left: 16px;
                text-align: right;
                width: 36px;
                line-height: 50px;
                height: 50px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 14px;
              }
              .songlist_item_songname {
                .songlist_item_songname_mv {
                  display: inline-block;
                  width: 33px;
                  height: 16px;
                  background-position: -40px -280px;
                  vertical-align: middle;
                  margin-right: 6px;
                  background-image: -webkit-image-set(
                    url(https://y.qq.com/ryqq/static/media/icon_sprite.630b3e60.png?max_age=2592000) 1x,
                    url(https://y.qq.com/ryqq/static/media/icon_sprite@2x.bf4cef49.png?max_age=2592000) 2x
                  );
                }
                .songlist_item_songname_text {
                  float: left;
                  max-width: 82%;
                  box-sizing: border-box;
                  margin-right: 8px;
                  white-space: nowrap;
                  font-size: 14px;
                  &:first-child {
                    max-width: 85%;
                    box-sizing: border-box;
                  }
                }
                .songlist_item_songname_iconmenu {
                  position: absolute;
                  right: -10px;
                  top: 50%;
                  overflow: hidden;
                  opacity: 0;
                  z-index: 50;
                  a {
                    display: inline-block;
                    &:hover i.iconfont {
                      color: #fff;
                      cursor: pointer;
                    }
                  }
                  .iconfont {
                    font-size: 40px;
                    display: inline-block;
                    margin-right: 10px;
                    vertical-align: top;
                    color: hsla(0, 0%, 88.2%, 0.8);
                  }
                }
              }
              .songlist_item_time {
                .sontlist_item_time_text {
                  font-size: 16px;
                }
                .iconfont {
                  display: none;
                  font-size: 40px;
                  &:hover {
                    color: #fff;
                    cursor: pointer;
                  }
                }
              }
            }
          }
        }
      }
    }
    .player_right {
      width: 440px;
      text-align: center;
      line-height: 24px;
    }
  }
  .player_footer {
  }
`
