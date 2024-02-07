import styled from 'styled-components'

interface ItemProps {
  bgimg: string
}

export const RankListWrapper = styled.div<ItemProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 196px;
  height: 500px;
  background: url(${(props: ItemProps) => props.bgimg + '?imageView&blur=40x20'});
  margin-right: 20px;
  padding: 20px;
  .rank-list-container {
    width: 100%;
    color: #fff;
    .rank-list-top {
      letter-spacing: 2px;
      padding-bottom: 12px;
      .rank-top-title {
        font-size: 24px;
        text-align: center;
        margin-bottom: 12px;
      }
      .rank-title {
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 12px;
      }
    }
    .rank-list-content {
      font-size: 14px;
    }
  }
`
export const RankSong = styled.div`
  a {
    display: flex;
    color: #fff;
    padding: 12px 0;
    cursor: pointer;
    .rank-number {
      font-size: 14px;
      font-weight: bold;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin-right: 12px;
    }
    .rank-song-name {
      font-size: 14px;
    }
  }
`
