import styled from 'styled-components'

export const HotWrapper = styled.div`
  padding: 20px;
  width: 1100px;
  .hot-recommend {
    ${(props) => props.theme.mixin.flexSpaceBetween};
    align-items: flex-start;
    flex-wrap: wrap;
    .hot-item {
      display: flex;
      flex-direction: column;
      margin: 0 20px 28px 0;
      width: 220px;
      transition: 0.2s ease;
      .item-top {
        width: 220px;
        border-radius: 4px;
        transition: 0.2s ease;
        cursor: pointer;
        .item-img {
          position: relative;
          width: 100%;
          height: 220px;
          margin-bottom: 12px;
          overflow: hidden;
          .iconfont {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.3);
            border-radius: 50%;
            opacity: 0;
            transition: 0.2s ease;
            font-size: 56px;
            color: #f5f5f5;
          }
          img {
            width: 100%;
            height: 220px;
            transition: all 0.2s ease;
            &:hover {
              transform: scale(1.2);
            }
          }
          &:hover {
            .iconfont {
              transform: translate(-50%, -50%) scale(1.2);
              opacity: 1;
              z-index: 9;
            }
          }
        }

        /* &:hover {
          .item-img {
            transform: scale(1.1);
          }
          .item-cover {
            opacity: 1;
            transform: scale(1.1);
          }
        } */
        &:nth-child(4n) {
          margin-right: 0;
        }
      }
      .item-bottom {
        font-size: 14px;
        color: #424242;
        .item-title {
          display: flex;
        }
      }
    }
  }
`
