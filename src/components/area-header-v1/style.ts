import styled from 'styled-components'

export const HeaderV1Wrapper = styled.div`
  width: 1080px;
  ${(props) => props.theme.mixin.flexCenter};
  flex-direction: column;
  padding: 30px 0 20px;
  .hot-title {
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 8px;
    color: #333;
    line-height: 2.8;
  }
  .hot-keylist {
    width: 100%;
    padding: 12px 0;
    line-height: 1.5;
    ${(props) => props.theme.mixin.flexSpaceBetween};
    .keywords {
      flex: 1;
      ${(props) => props.theme.mixin.flexCenter};
      .item {
        color: #424242;
        margin-right: 40px;
        cursor: pointer;
        &.active-text {
          color: ${(props) => props.theme.color.secondary};
        }
        &:hover {
          color: ${(props) => props.theme.color.secondary};
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .more {
      ${(props) => props.theme.mixin.flexCenter};
      font-size: 13px;
      width: 51px;
      .more-text {
        color: #777777;
      }
      .iconfont {
        font-size: 12px;
        color: #777777;
      }
      &:hover {
        .more-text,
        .iconfont {
          color: ${(props) => props.theme.color.secondary};
        }
      }
    }
  }
`
