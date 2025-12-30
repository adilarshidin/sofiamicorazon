import styled from "styled-components";
import { FaUsers, FaChurch } from "react-icons/fa";

import eventsImage from "../assets/2.webp";
import servicesImage from "../assets/3.webp";
import ViewWrapper from "./ViewWrapper";
import SEO from "./SEO";

const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 2%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
  gap: 3rem;
  align-items: center;
  background-color: #fefbf5;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

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
  color: #333;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Heading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #bfa34a;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Services = () => {
  return (
    <>
      <SEO
        title="Servicios Parroquiales | Inmaculada Concepción Vigo"
        description="Servicios parroquiales, actividades comunitarias, clases y tablón de servicios de la Parroquia de la Inmaculada Concepción en Vigo."
      />
      <ViewWrapper>
        <h1>Servicios</h1>
        <ServicesWrapper>
          <Card>
            <Image src={eventsImage} loading="lazy" alt="Actividades y celebraciones de la Iglesia de la Inmaculada Concepción en Vigo" />
            <Text>
              <Heading><FaChurch /> Actividades y celebraciones</Heading>
              <p>
                Celebramos festividades cristianas junto a la comunidad y ofrecemos clases de inglés y español para todas las edades.
              </p>
            </Text>
          </Card>

          <Card $reverse>
            <Image src={servicesImage} loading="lazy" alt="Tablón de servicios y anuncios de la Iglesia de la Inmaculada Concepción en Vigo" />
            <Text>
              <Heading><FaUsers /> Tablón de servicios</Heading>
              <p>
                Publica anuncios de empleo, ofrece servicios profesionales o comparte tus habilidades con la comunidad.
              </p>
            </Text>
          </Card>
        </ServicesWrapper>
      </ViewWrapper>
    </>
  );
};

export default Services;
