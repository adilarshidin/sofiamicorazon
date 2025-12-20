import { styled, keyframes } from "styled-components";

import FrontImage from "../assets/front.webp";
import YardImage from "../assets/yard.webp";

const slideLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  z-index: 0;
`;

const Track = styled.div`
  display: flex;
  width: 200%;
  animation: ${slideLeft} 20s linear infinite;
`;

const Image = styled.img`
  width: 100%;
  max-width: 100vw;
  flex-shrink: 0;
  object-fit: cover;
  margin: 2%;

  border: solid 5px;
  border-color: #cd1c18;
  border-background: linear-gradient(326deg, #cd1c18 0%, #66023c 74%);
  border-radius: 10%;
`;

const ImageCarousel = () => {
  return (
    <CarouselWrapper>
      <Track>
        {/* First set */}
        <Image src={FrontImage} alt="front view" />
        <Image src={YardImage} alt="view from the yard" />

        {/* Duplicate set for seamless loop */}
        <Image src={FrontImage} alt="front view duplicate" />
        <Image src={YardImage} alt="view from the yard duplicate" />
      </Track>
    </CarouselWrapper>
  );
};

export default ImageCarousel;
