import styled from 'styled-components'

export const RankListWrapper = styled.div`
  width: 990px;
  .ranklist_bar {
    display: flex;
    line-height: 50px;
    padding-left: 54px;
    background-color: rgba(0, 0, 0, 0.01);
    .col1 {
      width: 630px;
      padding: 8px 12px;
    }
    .col2 {
      width: 200px;
      padding-left: 15px;
      padding: 6px 12px;
      box-sizing: border-box;
    }
    .col3 {
      padding: 6px 12px;
    }
  }
  .rank_item {
    display: flex;
    height: 100px;
    width: 100%;
    line-height: 80px;
    background-color: #fff;
    &:nth-child(odd) {
      background-color: rgba(0, 0, 0, 0.01);
    }
    .rank_number {
      padding: 12px;
      font-size: 20px;
      width: 40px;
    }
    .rank_coverimg {
      margin: 12px;
      cursor: pointer;
    }
    .rank_songname {
      padding: 8px 12px;
      width: 550px;
      cursor: pointer;
      &:hover {
        color: #31c27c;
      }
    }
    .rank_singer {
      padding: 6px 12px;
      width: 200px;
      cursor: pointer;
      &:hover {
        color: #31c27c;
      }
    }
    .rank_duration {
      padding: 6px 12px;
      color: #999;
    }
  }
`
