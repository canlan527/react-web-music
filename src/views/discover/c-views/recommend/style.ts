import styled from 'styled-components'

export const RecommendWrapper = styled.div`
  width: 100%;
  background: #f5f5f5;
  ${(props) => props.theme.mixin.flexCenter};
  flex-direction: column;
  padding-bottom: 50px;
`
