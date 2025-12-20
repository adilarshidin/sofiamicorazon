import styled from "styled-components";

import ImageCarousel from "./ImageCarousel";

const Paragraph = styled.p`
  padding: 2%;
`;

const StyledA = styled.a`
  text-decoration: none;
`;

const MainPage = () => {
  return (
    <div>
      <ImageCarousel />
      <Paragraph>
        El Centro Integral de Inclusión y Emergencia Social (CIIES) del
        Ayuntamiento de Vigo configurara como un centro de atención integral
        para personas sin hogar, en situación de exclusión social y/o emergencia
        social que persigue realizar una intervención social de calidad que
        permita a las personas mejorar su calidad de vida, promover contextos
        que faciliten la inserción socio-laboral y atender situaciones puntuales
        de emergencia social.
      </Paragraph>
      <Paragraph>
        Las instalaciones del CIIES cuentan con más de 2000 m2 distribuidos en
        tres plantas y un amplio patio de alrededor de 1600 m2. El acceso a las
        instalaciones se realiza por la calle Jacinto Benavente y el horario de
        funcionamiento se desarrolla ininterrumpidamente, las 24 horas del día,
        los 365 días del año; estableciéndose unos horarios concretos segundo el
        tipo de servicio o centros.
      </Paragraph>
      <Paragraph>
        Además, el CIIES cuenta también con un piso destinado al programa de
        transición a la vida autónoma.
      </Paragraph>
      <div style={{ padding: "2%" }}>
        <h3>Horarios:</h3>
        <p>Lunes a Viernes de 8:30 a 21:30.</p>
        <StyledA href="/regulations.pdf" download="reglamento.pdf">
          Descargar reglamento
        </StyledA>
      </div>
    </div>
  );
};

export default MainPage;
