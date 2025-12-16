import styled from "styled-components";

import tabletImage from "../assets/4.jpeg";
import confessionBoothImage from "../assets/5.jpeg";
import ViewWrapper from "./ViewWrapper";

const ImageBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  aspect-ratio: 3 / 2;
  border-radius: 12px;
  object-fit: cover;
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
  padding: 3%;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const Map = () => (
  <MapWrapper>
    <h1>Ubicación en el mapa</h1>
    <iframe
      title="Ubicación de la iglesia"
      src="https://vigo.maps.arcgis.com/apps/webappviewer/index.html?id=95730d02d392425da3fe379a2336ac15&marker=-8.70044231414795,42.23233848882558&level=17"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </MapWrapper>
);

const About = () => {
  return (
    <ViewWrapper>
      <ImageBlock>
        <Image src={tabletImage} />
        <Image src={confessionBoothImage} />
      </ImageBlock>
      <p>Arquitecto: Antonio Román Conde.</p>
      <p>Año: 1968.</p>
      <p>Localización: Calle del Cronista J. Espinosa</p>
      <p>
        Esta iglesia, situada en el popular barrio del Calvario, sigue una línea
        arquitectónica inspirada en Le Corbusier.
      </p>
      <p>
        Está caracterizada por el uso de ángulos rectos, que se elevan hasta el
        cielo. En el interior se obtiene la luz a través de celosías de vidrio y
        plástico. El material más utilizado es el hormigón, tanto para la
        realización de los triángulos exteriores como para la plataforma del
        coro.
      </p>
      <Map />
    </ViewWrapper>
  );
};

export default About;
