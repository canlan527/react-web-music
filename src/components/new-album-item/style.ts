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
      left: 0;
      width: 140px;
      height: 140px;
      img {
        width: 100%;
        height: 100%;
      }
      z-index: 100;
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
    }
  }
`
