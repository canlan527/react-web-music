import styled from 'styled-components'

interface IAvatar {
  $width: number
}

export const AvatarWrapper = styled.div<IAvatar>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .avatar_img {
    width: ${(props) => `${props.$width}px`};
    height: ${(props) => `${props.$width}px`};
    border-radius: 50%;
    margin-bottom: 18px;
    img {
      border-radius: 50%;
    }
  }
`
