import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { SwiperSlide } from "swiper/react";
import { SwiperCustom, ImageSlideCarousel } from "./ImageCarousel.style";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ImageCarousel = ({ slides }) => {
  return (
    <SwiperCustom
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      navigation={true}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <ImageSlideCarousel src={slide.img.lg} />
        </SwiperSlide>
      ))}
    </SwiperCustom>
  );
};

export default ImageCarousel;
