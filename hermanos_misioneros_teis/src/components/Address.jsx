import { styled } from "styled-components";
import { FaFax, FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Container = styled.div`
  margin: 3%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  border: 2px solid darkgreen;
  background: white;
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

const TextWrapper = styled.p`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 2%;
`;

const StyledA = styled.a`
  text-decoration: none;
`;

const Address = () => {
  return (
    <Container>
      <MapWrapper>
        <TextWrapper>
          <FaLocationDot />
          Avenida Galicia, 160. Vigo, 36216 Pontevedra. España.
        </TextWrapper>
        <iframe
          title="Ubicación de la institución"
          src="https://vigo.maps.arcgis.com/apps/webappviewer/index.html?id=95730d02d392425da3fe379a2336ac15&marker=-8.6872,42.252250&level=17"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </MapWrapper>
      <Wrapper>
        <h2>Contactos:</h2>
        <StyledA href="tel:986451885">
          <TextWrapper>
            <FaPhone />986451885 Tel
          </TextWrapper>
        </StyledA>
        <TextWrapper>
          <FaFax />986453519 Fax
        </TextWrapper>
        <StyledA href="mailto:hmdlep@hermanosmisioneros.org">
          <TextWrapper>
            <IoMail />hmdlep@hermanosmisioneros.org
          </TextWrapper>
        </StyledA>
      </Wrapper>
    </Container>
  );
};

export default Address;
