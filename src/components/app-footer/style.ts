import styled from 'styled-components'

export const AppFootterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 300px;
  color: grey;
  font-size: 14px;
  background-color: #333;
  padding: 80px 0 0 30px;
  box-sizing: border-box;
  .app-footer-container {
    width: 1080px;
    margin: 0 auto;
    .app-footer-top {
      display: flex;
      margin-bottom: 20px;
      .app-footer-sec1 {
        flex: 1;
        .sec1-title {
          font-size: 38px;
          padding: 20px;
        }
        .sec1-ul {
          display: flex;
          justify-content: space-around;
          .sec1-item {
            display: flex;
            flex-direction: column;
            &:hover .iconfont {
              color: ${(props) => props.theme.color.secondary};
            }
            .iconfont {
              display: block;
              font-size: 34px;
              color: #f3f3f3;
              margin-bottom: 12px;
            }
            span {
              display: block;
              font-size: 14px;
            }
          }
        }
      }
      .app-footer-right {
      }
    }
    .app-footer-bottom {
      margin: 20px 0;
      p {
        ${(props) => props.theme.mixin.flexCenter};
        margin: 18px 0;
        &:hover {
          color: ${(props) => props.theme.color.secondary};
        }
        a {
          font-size: 13px;
          color: grey;
          cursor: pointer;
          &:hover {
            color: ${(props) => props.theme.color.secondary};
          }
        }
      }
    }
  }
`
