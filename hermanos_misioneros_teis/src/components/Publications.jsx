import { styled } from "styled-components";

import FirstImage from "../assets/1.webp";
import SecondImage from "../assets/2.webp";
import ThirdImage from "../assets/3.webp";
import FourthImage from "../assets/4.webp";
import FifthImage from "../assets/5.webp";
import SixthImage from "../assets/6.webp";
import SeventhImage from "../assets/7.webp";

const Container = styled.div`
  margin: 3%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  border: 2px solid darkgreen;
  background: white;
`;

const ImagesContainer = styled.div`
  border: 1px solid darkgreen;
  padding: 3%;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  margin: 2%;
  padding: 2%;
  border: 2px solid darkgreen;
  background: rgb(1, 50, 32);
  background: linear-gradient(
    159deg,
    rgba(1, 50, 32, 1) 0%,
    rgba(57, 255, 20, 1) 100%
  );
`;

const Publications = () => {
  return (
    <Container>
      <h2 style={{ paddingBottom: "3%" }}>Subvenciones</h2>
      <ImagesContainer>
        <h3>Fomento Empleo Concello 2024</h3>
        <Image src={FirstImage} />
        <h3>FSE+ - FONDO SOCIAL EUROPEO PLUS</h3>
        <Image src={SecondImage} />
        <Image src={ThirdImage} />
        <Image src={FourthImage} />
        <Image src={FifthImage} />
        <Image src={SixthImage} />
        <Image src={SeventhImage} />
      </ImagesContainer>
    </Container>
  );
};

export default Publications;
