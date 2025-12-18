import styled from "styled-components";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";

import tabletImage from "../assets/4.webp";
import confessionBoothImage from "../assets/5.webp";
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

const TextWrapper = styled.p`
  display: flex;
  align-items: center;
`;

const Map = () => (
  <MapWrapper>
    <h1>Ubicación en el mapa</h1>
    <TextWrapper><FaLocationDot /> Rúa Toledo, 5 (Vigo). 36205, Vigo, Pontevedra.</TextWrapper>
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
      <br />
      <p>Párroco: D. Miguel Ángel Castro Quinteiro.</p>
      <TextWrapper><FaPhone /> <a href="tel:986274622">986274622</a></TextWrapper>
      <TextWrapper><IoMailSharp /> <a href="mailto:vigo.inmaculada@diocesetuivigo.org">vigo.inmaculada@diocesetuivigo.org</a></TextWrapper>
      <br />
      <div>
        <h2>Horarios de misas</h2>
        <p>Diario: 9:30 y 18:30 horas.</p>
        <p>Sábados: 18:30 y 20:00 horas.</p>
        <p>Domingos y festivos: 10:00, 12:00 y 13:00 horas.</p>
        <br />
        <p>De junio a septiembre:</p>
        <p>Diario: 9:30 y 20:00 horas.</p>
        <p>Sábados: 18:30 y 20:00 horas.</p>
        <p>Domingos y festivos: 10:00 y 12:30 horas.</p>
      </div>
      <Map />
    </ViewWrapper>
  );
};

export default About;
