import styled from 'styled-components'

export const NavBarWrapper = styled.div`
  margin-top: 8px;
  width: 100%;
  background: #fff;
  ${(props) => props.theme.mixin.flexCenter};
  .item {
    font-size: 15px;
    color: #c1c1c1;
    margin-right: 47px;
    padding: 18px 8px;
    :hover,
    .active {
      color: ${(props) => props.theme.color.secondary};
    }
  }
`
