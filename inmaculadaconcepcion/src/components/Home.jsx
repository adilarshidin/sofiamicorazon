import styled from "styled-components";
import { useEffect, useState } from "react";

import firstChurchImage from "../assets/1.jpeg";
import secondChurchImage from "../assets/6.jpeg";
import thirdChurchImage from "../assets/7.jpeg";
import fourthChurchImage from "../assets/8.jpeg";
import fifthChurchImage from "../assets/9.jpeg";

const images = [
  firstChurchImage,
  secondChurchImage,
  thirdChurchImage,
  fourthChurchImage,
  fifthChurchImage,
];

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: min(100vh);
`;

const Image = styled.img`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;
  object-fit: cover;

  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const Paragraph = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 2;
  color: white;
  text-align: center;
  color: gold;

  font-size: clamp(1.2rem, 3vw, 2.2rem);
  line-height: 1.4;
  padding: 1rem 1.5rem;

  /* improves readability on busy images */
  background: rgba(0, 0, 0, 0.45);
  border-radius: 8px;
`;

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <ImageContainer>
        {images.map((img, index) => (
          <Image key={img} src={img} alt="" $active={index === currentIndex} />
        ))}

        <Paragraph>
          “Porque donde están dos o tres congregados en mi nombre, allí estoy yo
          en medio de ellos.” <br /> Mateo 18:20
        </Paragraph>
      </ImageContainer>
    </Wrapper>
  );
};

export default Home;
