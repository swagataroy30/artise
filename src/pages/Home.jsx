import { CarouselContainer } from "./Home.style";
import ImageCarousel from "../components/ImageCarousel";

import img1_lg from "../assets/carousel_image1_large.png";
import img2_lg from "../assets/carousel_image2_large.jpg";

const Home = () => {
  const slides = [
    { img: { lg: img1_lg }, title: "Discover artworks", desc: "Explore a vast collection of artworks" },
    { img: { lg: img2_lg }, title: "Showcase your artworks", desc: "Display your creative artworks" },
  ];

  return (
    <>
      <CarouselContainer>
        <ImageCarousel slides={slides} />
      </CarouselContainer>
    </>
  );
};

export default Home;
