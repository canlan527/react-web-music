import styled from 'styled-components'

export const BannerWrapper = styled.div`
  width: 1080px;
  .ant-carousel .slick-prev,
  .ant-carousel .slick-prev:hover {
    left: 10px;
    z-index: 2;
    color: white;
    font-size: 20px;
    height: 30px;
  }

  .ant-carousel .slick-next,
  .ant-carousel .slick-next:hover {
    right: 10px;
    z-index: 2;
    color: white;
    font-size: 20px;
    height: 30px;
  }
`
