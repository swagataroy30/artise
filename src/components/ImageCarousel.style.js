import styled from "styled-components";
import { Swiper } from "swiper/react";

export const ImageSlideCarousel = styled.img`
  width: 100%;
  height: 100%;
  /* object-fit: contain; */
`;

export const SwiperCustom = styled(Swiper)`
  .swiper-button-prev,
  .swiper-button-next {
    color: white;
  }

  .swiper-button-prev {
    left: 2%;
  }

  .swiper-button-next {
    right: 2%;
  }

  .swiper-pagination {
    text-align: right;
    padding-right: 10px;
    &-bullet {
      cursor: pointer;
      width: 10px;
      height: 10px;
      display: inline-block;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.7);
      margin: 0 5px;
      box-shadow: none;
      transition: all 0.4s ease 0s;
      transform: scale(0.8);
      &:hover,
      &-active {
        background-color: rgba(255, 255, 255, 1);
        border-color: rgba(255, 255, 255, 1);
        transform: scale(0.9);
        opacity: 1;
      }
    }
  }
`;
