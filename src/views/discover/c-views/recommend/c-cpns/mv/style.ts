import styled from 'styled-components'

export const MVWrapper = styled.div`
  .mv-list {
    display: flex;
    .mv-list-item {
      flex: 1;
      width: 350px;
      margin-right: 20px;
      padding-bottom: 20px;
      .mv-item-top {
        width: 100%;
        height: 300px;
        transition: all 2s ease-in;
        .mv-item-img {
          overflow: hidden;
          width: 100%;
          height: 282px;
          border-radius: 12px;
          &:hover img {
            transition: all 0.3s ease;
            transform: scale(1.2);
          }
          img {
            width: 100%;
            height: 100%;
          }
        }

        .mv-item-desc {
          color: #333;
          padding: 2px 0;
          font-size: 14px;
        }
      }
      .mv-item-bottom {
        font-size: 14px;
        color: grey;
        .item {
          padding: 3px 0;
        }
        .mv-item-name {
          font-size: 14px;
          color: #333;
        }
        .mv-item-singer {
        }
        .mv-item-playcount-box {
          .iconfont {
            font-size: 16px;
            margin-right: 6px;
            .mv-item-playcount {
            }
          }
        }
      }
    }
  }
`
