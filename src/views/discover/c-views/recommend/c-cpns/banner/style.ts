import styled from 'styled-components'

export const BannerWrapper = styled.div`
  width: 100%;
  ${(props) => props.theme.mixin.flexCenter};
  transition: 0.2s ease;

  .ant-carousel {
    width: 1080px;
  }
  .ant-carousel .slick-prev,
  .ant-carousel .slick-prev:hover {
    left: 10px;
    z-index: 2;
    color: white;
    font-size: 10px;
    height: 30px;
  }

  .ant-carousel .slick-next,
  .ant-carousel .slick-next:hover {
    right: 10px;
    z-index: 2;
    color: white;
    font-size: 10px;
    height: 30px;
  }
  .iconfont {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    color: white;
    font-size: 80px;
    font-weight: bolder;
    &:hover {
      cursor: pointer;
    }
  }
  .iconfont.icon-prev {
    left: -80px;
  }
  .iconfont.icon-next {
    right: -80px;
  }
`
