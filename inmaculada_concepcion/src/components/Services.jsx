import styled from "styled-components";

import eventsImage from "../assets/2.jpeg";
import servicesImage from "../assets/3.jpeg";
import ViewWrapper from "./ViewWrapper";

const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 2%;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 70%;
  max-width: 480px;
  border-radius: 12px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Text = styled.div`
  width: 50%;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #fff;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Heading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const Services = () => {
  return (
    <ViewWrapper>
      <ServicesWrapper>
        <Row>
          <Image
            src={eventsImage}
            alt="Actividades y celebraciones de la iglesia"
          />
          <Text>
            <Heading>Actividades y celebraciones</Heading>
            <p>
              En nuestra iglesia celebramos las principales festividades
              cristianas junto a la comunidad, creando un espacio de encuentro,
              fe y alegría. Además, ofrecemos clases gratuitas de inglés y
              español para todas las edades, así como diversas actividades
              formativas y sociales abiertas a toda la comunidad.
            </p>
          </Text>
        </Row>

        <Row $reverse>
          <Image src={servicesImage} alt="Tablón de servicios y anuncios" />
          <Text>
            <Heading>Tablón de servicios</Heading>
            <p>
              Contamos con un tablón de servicios donde las personas pueden
              publicar anuncios de empleo, ofrecer servicios profesionales o dar
              a conocer habilidades que deseen compartir. Este espacio busca
              fomentar la ayuda mutua, el apoyo comunitario y la colaboración
              entre todos.
            </p>
          </Text>
        </Row>
      </ServicesWrapper>
    </ViewWrapper>
  );
};

export default Services;
