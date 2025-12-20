import { styled } from "styled-components";

const Wrapper = styled.div`
  padding: 2%;
`;

const StyledH2 = styled.h2`
  padding-top: 2%;
`;

const Paragraph = styled.p`
  padding-top: 1%;
`;

const Collaborations = () => {
  return (
    <Wrapper>
      <StyledH2>
        Proyectos transversales y de actuación con el contorno
      </StyledH2>
      <br />
      <h3>Unidad de calle</h3>
      <Paragraph>
        Servicio de atención al colectivo de personas sin techo que se
        encuentren en la calle que actúa como ponte entre la calle y la red de
        recursos específicos de atención a personas sin hogar y lucha contra la
        exclusión.
      </Paragraph>
      <Paragraph>
        Su actividad se centra en la detección, intervención y atención directa
        a las personas sin hogar en medio abierto, personas en situación de
        vulnerabilidad extrema y emergencia social debido a la permanencia en
        este medio.
      </Paragraph>
      <br />
      <h3>Servicio de búsqueda de alojamiento</h3>
      <Paragraph>
        Tiene como objetivo acompañar a las personas usuarias en los procesos de
        búsqueda de un alquiler que, en muchas ocasiones supondría el abandono
        definitivo de la situación de sin hogar y en algunos casos a
        recuperación de la autonomía personal y la posibilidad de la plena
        inclusión en la vida comunitaria.
      </Paragraph>
      <Paragraph>
        El servicio implica la búsqueda, selección y actualización de un listado
        de alojamientos, el contacto con los propietarios, el acompañamiento a
        los usuarios y, en ocasiones, la ayuda en el traslado de sus
        pertenencias.
      </Paragraph>
      <br />
      <h3>Sensibilización y servicios orientados al cambio social</h3>
      <Paragraph>
        Además de la atención directa de las necesidades básicas de las personas
        usuarias, el CIIES interviene en su entorno comunitario tratando de
        favorecer la integración del servicio y de reducir el impacto vecinal a
        través de:
      </Paragraph>
      <ul>
        <li>Actividades destinadas a mejorar la relación con el entorno.</li>
        <li>
          Actividades educativas que fomenten la participación personas usuarias
          en el entorno.
        </li>
        <li>
          Y, actividades de sensibilización, con jornadas de puertas abiertas y
          con talleres de sensibilización sobre la problemática de las Personas
          Sin Hogar (especialmente con la población adolescente en los centros
          educativos).
        </li>
      </ul>
    </Wrapper>
  );
};

export default Collaborations;
