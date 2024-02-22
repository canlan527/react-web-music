import styled from 'styled-components'

export const SingerWrapper = styled.div`
  width: 1190px;
  margin: 0 auto;
  .singer_title {
    font-size: 20px;
    padding-bottom: 24px;
  }
  .singerlist_hot {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 24px;
    .avatar-container {
      /* padding: 12px 40px; */
      margin: 14px 40px;
    }
  }
  .singerlist_common {
    span {
      display: inline-block;
      width: 146px;
      padding: 12px 24px;
      margin: 12px;
    }
  }
`
