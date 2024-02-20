import styled from 'styled-components'

interface IPlayerWrapper {
  $bgimg: string
}

export const PlayerWrapper = styled.div<IPlayerWrapper>`
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
    /* background-image: url(https://y.qq.com/music/photo_new/T002R300x300M0000012rYco2WSh8e.jpg?max_age=2592000); */
    background-image: url(${(props) => props.$bgimg});
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
  a {
    color: hsla(0, 0%, 88.2%, 0.8);
  }
  .player_content_wrapper {
    top: 11%;
    bottom: 18%;
    min-height: 328px;
    color: hsla(0, 0%, 88.2%, 0.8);
    cursor: default;
    .player_content {
      margin-right: 440px;
    }
  }
`
