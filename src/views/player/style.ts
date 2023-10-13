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
    background: pink;
    cursor: default;
    .player_left {
      flex: 1;
      background-color: orange;
      overflow: hidden;
      margin-right: 50px;
      .player_toolbar {
        display: flex;
        justify-content: start;
        align-items: center;
        width: 100%;
        background-color: blueviolet;
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
        background-color: beige;
        width: 100%;
        .player_songlist {
          height: 756px;
          .player_songlist_header {
            height: 46px;
            background-color: bisque;
            margin-bottom: 14px;
          }
          .player_songlist_content {
            height: 100%;
            overflow-y: auto;
            overflow-x: hidden;
            .songlist_item {
              background-color: lightskyblue;
              height: 40px;
              margin-bottom: 8px;
            }
          }
        }
      }
    }
    .player_right {
      width: 440px;
      background-color: tan;
      text-align: center;
      line-height: 24px;
    }
  }
  .player_footer {
  }
`
