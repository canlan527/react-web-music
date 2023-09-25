import styled from 'styled-components'

export const HotWrapper = styled.div`
  padding: 20px;
  width: 1100px;
  .hot-recommend {
    ${(props) => props.theme.mixin.flexSpaceBetween};
    align-items: flex-start;
    flex-wrap: wrap;

    }
  }
`
