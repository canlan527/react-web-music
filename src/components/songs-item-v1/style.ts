import styled from 'styled-components'

export interface ItemProps {
  itemwidth: string | number
}

export const ItemWrapper = styled.div<ItemProps>`
  .hot-item {
    display: flex;
    flex-direction: column;
    margin: 0 20px 28px 0;
    width: ${(props: ItemProps) => props.itemwidth}px;
    transition: 0.2s ease;
    .item-top {
      position: relative;
      width: ${(props: ItemProps) => props.itemwidth}px;
      border-radius: 4px;
      transition: 0.2s ease;
      cursor: pointer;
      .item-img {
        position: relative;
        width: 100%;
        height: ${(props: ItemProps) => props.itemwidth}px;
        margin-bottom: 12px;
        overflow: hidden;
        &:hover .item-img-box > img {
          transition: all 0.3s ease-in;
          transform: scale(1.1);
        }
        &:hover .iconfont {
          transition: all 0.3s ease-in;
          opacity: 1;
        }
        .iconfont {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          opacity: 0;
          transition: 0.2s ease;
          font-size: 56px;
          color: #f5f5f5;
        }
        .item-img-box {
          width: 100%;
          height: ${(props: ItemProps) => props.itemwidth}px;

          img {
            width: 100%;
            height: ${(props: ItemProps) => props.itemwidth}px;
          }
        }
      }
      .item-count {
        position: absolute;
        bottom: 12px;
        left: 0px;
        width: 100%;
        color: #fff;
        font-size: 14px;
        padding: 4px 0;
        text-align: center;
        background: rgba(200, 200, 200, 0.3);
      }
      &:nth-child(4n) {
        margin-right: 0;
      }
    }
    .item-bottom {
      font-size: 14px;
      color: #424242;
      .item-title {
        display: flex;
        margin-bottom: 12px;
      }
    }
  }
`
