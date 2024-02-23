import styled from 'styled-components'

interface ItemProps {
  itemwidth: string | number
}

export const NewAlbumItemWrapper = styled.div<ItemProps>`
  width: ${(props: ItemProps) => props.itemwidth}px;
  padding-top: 28px;
  .new-album-item-cover {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 160px;
    margin-right: 12px;
    .cover {
      position: relative;
      left: 0;
      width: 140px;
      height: 140px;
      z-index: 100;
      overflow: hidden;
      &:hover .iconfont {
        opacity: 1;
        transition: all 0.3s ease-in;
      }
      &:hover .item-mask {
        opacity: 1;
        transition: all 0.2s ease-in;
      }
      .item-mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.1);
        opacity: 0;
      }
      .cover-img {
        width: 140px;
        height: 140px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .iconfont {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 40px;
        color: #f3f3f3;
        opacity: 0;
      }
    }
    .recordIcon-icon {
      position: absolute;
      top: 50%;
      bottom: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 100px;
      height: 100px;
      border: 1px solid #555555;
      padding: 10px 6px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .new-album-item-info {
    padding: 12px 0;
    .new-album-name {
      font-size: 14px;
      color: #555555;
    }
    .new-album-item-singer {
      font-size: 13px;
      color: grey;
      &-2 {
        padding-top: 12px;
      }
    }
  }
`
