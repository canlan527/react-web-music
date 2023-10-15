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
          .iconfont {
            opacity: 0.6;
            font-size: 16px;
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
          /* col1 - col4 样式 */
          li {
            height: 50px;
            line-height: 50px;
            display: flex;
          }
          .col1 {
            width: 50px;
            ${(props) => props.theme.mixin.flexSpaceBetween};
          }
          .col2 {
            width: 68%;
            min-width: 620px;
            ${(props) => props.theme.mixin.flexSpaceBetween};
          }
          .col3 {
            width: 26%;
          }
          .col4 {
            width: 50px;
            display: flex;
            justify-content: end;
            align-items: center;
          }
          .player_songlist_header {
            display: flex;
            .songlist_header_checkbox {
            }
            .songlist_header_author {
              width: 26%;
            }
            .songlist_header_time {
            }
          }
          .player_songlist_content {
            height: 100%;
            overflow-y: auto;
            overflow-x: hidden;
            font-size: 14px;
            .iconfont {
              opacity: 0;
              font-size: 40px;
              margin: 0 4px;
              &:hover {
                color: #fff;
                cursor: pointer;
              }
            }
            .songlist_item {
              color: hsla(0, 0%, 88.2%, 0.8);
              transition: all 400ms ease;
              &:nth-child(odd) {
                background-color: rgba(0, 0, 0, 0.01);
              }
              &:hover .iconfont {
                opacity: 1;
              }
              &:hover .sontlist_item_time_text {
                display: none;
              }
              &:hover .songlist_item_time .iconfont {
                display: block;
              }
              .songlist_item_checkbox {
              }
              .songlist_item_number {
                padding: 0 4px;
              }
              .songlist_item_songname {
                padding-right: 8px;
                a {
                  color: hsla(0, 0%, 88.2%, 0.8);
                }
                .songlist_item_songname_left {
                  max-width: 85%;
                  max-height: 50px;
                  box-sizing: border-box;
                  float: left;
                  overflow: hidden;
                  &:hover .songlist_item_songname_text {
                    color: #fff;
                  }
                  .songlist_item_songname_text {
                  }
                  .songlist_item_songname_mv {
                    font-size: 12px;
                    color: ${(props) => props.theme.color.secondary};
                    border: 1px solid ${(props) => props.theme.color.secondary};
                    margin: 0 8px;
                    padding: 2px 4px;
                    border-radius: 4px;
                  }
                }
              }
              .songlist_item_artist {
                a {
                  color: hsla(0, 0%, 88.2%, 0.8);
                  &:hover {
                    color: #fff;
                  }
                }
              }
              .songlist_item_time {
                .iconfont {
                  display: none;
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
