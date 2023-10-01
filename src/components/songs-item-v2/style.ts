import styled from 'styled-components'

export interface ItemProps {
  itemwidth: string
}

export const ItemWrapper = styled.div<ItemProps>`
  display: inline-block;
  width: 33.333%;
  .hot-item {
    display: flex;
    margin: 0 20px 28px 0;
    .item-left {
      position: relative;
      width: ${(props: ItemProps) => props.itemwidth}px;
      cursor: pointer;
      &:hover .item-img img {
        transform: scale(1.1);
        transition: all 0.2s ease-in;
      }
      &:hover .iconfont {
        opacity: 1;
        font-size: 32px;
        margin: -16px 0 0 -16px;
        transition: all 0.3s ease-in;
      }
      .item-img {
        width: 100%;
        height: ${(props: ItemProps) => props.itemwidth}px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .iconfont {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -6px 0 0 -6px;
        border-radius: 50%;
        font-size: 12px;
        color: #f5f5f5;
        opacity: 0;
        transition: all 0.2s ease-in;
      }
    }
    .item-right {
      flex: 1;
      display: flex;
      font-size: 14px;
      color: #424242;
      margin-left: 12px;
      .item-info {
        flex: 1;
        display: flex;
        justify-content: space-evenly;
        align-items: start;
        flex-direction: column;
        .item-title {
          margin-bottom: 12px;
          cursor: pointer;
          &:hover {
            color: ${(props) => props.theme.color.secondary};
          }
        }
        .item-name {
          color: #777777;
        }
      }
      .item-duration {
        ${(props) => props.theme.mixin.flexCenter};
      }
    }
  }
`
