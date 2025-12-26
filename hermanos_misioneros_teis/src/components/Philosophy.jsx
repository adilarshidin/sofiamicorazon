import { styled } from "styled-components";

const Container = styled.div`
  margin: 3%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  border: 2px solid darkgreen;
  background: white;
`;

const Paragraph = styled.p`
  padding: 2%;
`;

const Philosophy = () => {
  return (
    <Container>
      <h2>Solidaridad, ayuda y ética</h2>
      <Paragraph>
        La característica que mejor define los centros de nuestra Institución,
        es que son lugares donde los más desheredados de la sociedad pueden
        acudir para intentar salir de su situación de pobreza, marginación y
        exclusión social.
      </Paragraph>
      <Paragraph>
        Hermanos Misioneros de los Enfermos Pobres se constituyen en Asociación
        de Fieles de Vida Consagrada, independientes de cualquier ideología
        política.
      </Paragraph>
      <Paragraph>
        Se fundamenta en la solidaridad y en valores éticos y evangélicos, para
        ayudar al prójimo a superar las barreras de la vida.
      </Paragraph>
    </Container>
  );
};

export default Philosophy;
