import styled from 'styled-components'

export const RecommendWrapper = styled.div`
  width: 100%;
  background: #eee;
  ${(props) => props.theme.mixin.flexCenter};
  flex-direction: column;
`
