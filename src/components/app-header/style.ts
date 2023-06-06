import { styled } from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 80px;
  background: #fff;
  box-shadow: 0 -2px 3px 4px rgba(222, 222, 222, 0.7);
  .nav {
    ${(props) => props.theme.mixin.wrapv1}
    ${(props) => props.theme.mixin.flexSpaceAround}
    justify-content: space-between;
  }
`

export const HeaderLeft = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  overflow: hidden;
  .logo-box {
    ${(props) => props.theme.mixin.flexSpaceAround}
    .logo {
      width: 80px;
      height: 80px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .logo-title {
      flex: 1;
      display: inline-block;
      font-size: 28px;
    }
  }
  .nav-item {
    display: flex;
    .item {
      font-size: 18px;
      height: 90px;
      text-align: center;
      padding: 0 20px;
      line-height: 90px;
      &:hover {
        color: ${(props) => props.theme.color.secondary};
      }
    }
  }
`

export const HeaderRight = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  width: 600px;
  .search-box {
    margin-top: 22px;
    position: relative;
    overflow: hidden;
    input {
      width: 200px;
      padding: 12px 4px;
      margin: 0 20px;
      border-radius: 3px;
      border: 1px solid #eee;
      outline: none;
    }
    .icon-search {
      position: absolute;
      right: 20px;
      top: 33%;
      transform: translateY(-50%);
      padding: 12px;
      /* color: #eee; */
      font-size: 24px;
      cursor: pointer;
      &:hover {
        background: rgba(222, 222, 222, 0.6);
      }
    }
  }
  .login-box {
    box-sizing: border-box;
    line-height: 90px;
    .login-btn {
      padding: 0 12px;
      cursor: pointer;
      letter-spacing: 4px;
      &:hover {
        color: #fff;
        background: ${(props) => props.theme.color.secondary};
      }
    }
  }
`
