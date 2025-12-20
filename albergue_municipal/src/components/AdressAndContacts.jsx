import { styled } from "styled-components";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Wrapper = styled.div`
  padding: 2%;
`;

const StyledA = styled.a`
  text-decoration: none;
`;

const TextWrapper = styled.p`
  display: flex;
  align-items: center;
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
  padding: 2%;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const AdressAndContacts = () => {
  return (
    <div>
      <Wrapper>
        <h2>UBICACIÓN:</h2>
        <StyledA href="/address.pdf" download="direcciones.pdf">
          Descargar archivo de direcciones
        </StyledA>
      </Wrapper>
      <MapWrapper>
        <TextWrapper>
          <FaLocationDot />Rúa Marqués de Valterra, nº6. Vigo, Pontevedra.
        </TextWrapper>
        <iframe
          title="Ubicación del albergue"
          src="https://vigo.maps.arcgis.com/apps/webappviewer/index.html?id=95730d02d392425da3fe379a2336ac15&marker=-8.732,42.234&level=17"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </MapWrapper>
      <Wrapper>
        <h2>Teléfono de contacto:</h2>
        <StyledA href="tel:986294280">
          <TextWrapper>
            <FaPhone /> 986294280
          </TextWrapper>
        </StyledA>
      </Wrapper>
    </div>
  );
};

export default AdressAndContacts;
