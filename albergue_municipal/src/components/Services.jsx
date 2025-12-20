import { styled } from "styled-components";
import { Link } from "react-router";

const Wrapper = styled.div`
  padding: 2%;
`;

const StyledA = styled.a`
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Services = () => {
  return (
    <Wrapper>
      <h3>Programas y servicios</h3>
      <StyledA href="/plan.pdf" download="servicios.pdf">
        Descargar documento completo
      </StyledA>
      <ul>
        <StyledLink to="/services/immediate">
          <li>De respuesta inmediata</li>
        </StyledLink>
        <ul>
          <li>Albergue</li>
          <li>Comedor social</li>
          <li>Unidad de higiene (servicios de duchas, lavandería y ropero)</li>
          <li>Servicio de consigna</li>
          <li>Servicio de dirección postal y empadronamiento</li>
        </ul>
        <StyledLink to="/services/personalized">
          <li>De atención personalizada</li>
        </StyledLink>
        <ul>
          <li>Centro de atención social continuada</li>
          <li>Centro de día de inclusión social</li>
          <li>Centro de acogida e inclusión</li>
          <li>Atención psicosocial</li>
        </ul>
        <StyledLink to="/services/collaborations">
          <li>Transversales y de actuación con el entorno</li>
        </StyledLink>
        <ul>
          <li>Unidad de calle</li>
          <li>Sensibilización</li>
          <li>Servicio de búsqueda de alojamiento</li>
        </ul>
      </ul>
      <br />
      <h3>Objetivos</h3>
      <ul>
        <li>
          Atender las necesidades básicas (alojamiento, alimentación, asistencia
          y atención especializada) de las personas afectadas por situaciones
          valoradas de exclusión social o en riesgo de exclusión.
        </li>
        <li>
          Proporcionar atención puntual en situaciones de emergencia
          sobrevenida.
        </li>
        <li>
          Ofrecer soluciones de carácter integral que permitan a las personas
          usuarias desarrollar verdaderos procesos de inclusión de carácter
          permanente a fin de conseguir mayores niveles de integración y
          normalización social en cada caso o un mayor control del deterioro en
          otros casos.
        </li>
        <li>
          Abordar desde la perspectiva de la integración o inclusión social la
          situación de las personas que no pueden conservar o acceder a un
          alojamiento idóneo y permanente que proporcione un marco estable de
          convivencia, ya sea por razones económicas u otras barreras sociales,
          o bien porque presentan dificultades personales para llevar una vida
          autónoma.
        </li>
      </ul>
      <br />
      <h3>Personas destinatarias</h3>
      <p>
        Con carácter general, personas mayores de edad y menores de 65 años que
        acrediten su identidad, carezcan de alojamiento y de recursos económicos
        suficientes y puedan desarrollar de forma autónoma las tareas de la vida
        diaria (AVD). Excepcionalmente, con la autorización previa de la
        Dirección Municipal, podrán acceder al servicio personas que no cumplan
        los requisitos de edad y autonomía.
      </p>
      <br />
      <h3>Acceso al programa</h3>
      <p>
        Las vías de acceso así como ciertos requisitos para la admisión varían
        en función de cada uno de los servicios que ofrece el CIIES aunque, de
        manera general, el acceso se produce bien por solicitud directa de la
        persona usuaria, bien por derivación desde los Servicios Sociales
        Comunitarios Básicos, otros servicios o programas del propio CIIES o de
        otras entidades e instituciones. Con carácter general, cuando demanda
        sea superior a la oferta de los servicios del CIIES tendrán preferencia
        las personas con menores recursos económicos.
      </p>
    </Wrapper>
  );
};

export default Services;
