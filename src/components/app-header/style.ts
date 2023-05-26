import { styled } from 'styled-components'

export const HeaderWrapper = styled.div`
  .nav {
    height: 100px;
    ${(props) => props.theme.mixin.wrapv1}
    ${(props) => props.theme.mixin.flexCenter}
    
    .item {
      font-size: 14px;
      padding: 4px 10px;
      margin: 2px 6px;
      background: #333;
      color: #fff;
    }
  }
`
