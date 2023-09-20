import styled from 'styled-components'

export interface ItemProps {
  itemwidth: string
}

export const ItemWrapper = styled.div<ItemProps>`
  .hot-item {
    display: flex;
    flex-direction: column;
    margin: 0 20px 28px 0;
    width: ${(props: ItemProps) => props.itemwidth}px;
    transition: 0.2s ease;
    .item-left {
      position: relative;
      width: ${(props: ItemProps) => props.itemwidth}px;
      border-radius: 4px;
      transition: 0.2s ease;
      cursor: pointer;
      margin-right: 20px;
      .item-img {
        position: relative;
        width: 100%;
        height: ${(props: ItemProps) => props.itemwidth}px;
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
          font-size: 33px;
          color: #f5f5f5;
        }
        img {
          width: 100%;
          height: ${(props: ItemProps) => props.itemwidth}px;
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
      .item-count {
        position: absolute;
        bottom: 12px;
        left:0px;
        width: 100%;
        color: #fff;
        font-size: 14px;
        padding: 4px 0;
        text-align: center;
        background: rgba(200, 200, 200, .3);
      }
      &:nth-child(4n) {
        margin-right: 0;
      }
    }
    .item-right {
      font-size: 14px;
      color: #424242;
      .item-title {
        margin-bottom: 12px;
      }
      .item-name {
        color: #777777;
      }
    }
`
