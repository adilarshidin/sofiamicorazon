import { styled } from "styled-components";
import { Link } from "react-router";
import { IoIosMan } from "react-icons/io";

import Togglable from "./Togglable";

const Wrapper = styled.div`
  padding: 2%;
`;

const StyledH2 = styled.h2`
  padding-top: 2%;
`;

const Paragraph = styled.p`
  padding-top: 1%;
`;

const StyledA = styled.a`
  text-decoration: none;
`;

const Note = styled.div`
  background-color: #fcf8e3;
  padding: 4%;
  border-radius: 20px;
  border-color: #faebcc;
  color: #8a6d3b;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const TextWrapper = styled.p`
  display: flex;
  align-items: center;
`;

const Access = () => {
  return (
    <Wrapper>
      <StyledH2>
        Acceso a los programas y servicios prestados en el Centro Integral de
        Inclusión y Emergencia Social (CIIES)
      </StyledH2>
      <br />

      <Togglable label="A quién está dirigido">
        <p>
          Con carácter general, personas mayores de edad y menores de 65 años
          que acrediten su identidad, carezcan de alojamiento y de recursos
          económicos suficientes y puedan desarrollar de forma autónoma las
          tareas de la vida diaria (AVD). Excepcionalmente, con la autorización
          previa de la Dirección Municipal, podrán acceder al servicio personas
          que no cumplan los requisitos de edad y autonomía.
        </p>
      </Togglable>
      <br />

      <Togglable label="Cómo hacerlo">
        <Note>
          NOTA: Puede consultar los{" "}
          <StyledLink to="/services/online">
            solicitantes obligados a relacionarse con la administración de
            manera electrónica.
          </StyledLink>
        </Note>
        <Paragraph>
          Las vías de acceso así como ciertos requisitos para la admisión varían
          en función de cada uno de los servicios que ofrece el CIIES aunque, de
          manera general, el acceso se produce bien por solicitud directa de la
          persona usuaria, bien por derivación desde los Servicios Sociales
          Comunitarios Básicos, otros servicios o programas del propio CIIES o
          de otras entidades e instituciones.
        </Paragraph>
        <Paragraph>
          Con carácter general, cuando demanda sea superior a la oferta de los
          servicios del CIIES tendrán preferencia las personas con menores
          recursos económicos.
        </Paragraph>
        <br />
        <h3>
          <TextWrapper>
            Presencialmente <IoIosMan />
          </TextWrapper>
        </h3>
        <Paragraph>
          Solo para los solicitantes no obligados a relacionarse telemáticamente
          con la administración (puede consultar los{" "}
          <StyledLink to="/services/online">
            solicitantes obligados a relacionarse con la administración de
            manera electrónica
          </StyledLink>
          ).
        </Paragraph>
        <Paragraph>
          Presentando el impreso de solicitud y demás documentación requerida en
          el Registro General del Ayuntamiento.
        </Paragraph>
        <Paragraph>
          O bien solicitando cita previa en la zona de atención social (UTS) que
          le corresponda por domicilio y presentando la solicitud y
          documentación requerida.
        </Paragraph>
        <StyledA href="http://hoxe.vigo.org/movemonos/atencionsocial_uts.php?lang=cas">
          Direcciones y Teléfonos de las UTS
        </StyledA>
      </Togglable>
      <br />

      <Togglable label="Documentación requerida">
        <ul>
          <li>
            <StyledA href="/application.pdf" download="solicitud.pdf">
              Solicitud programas y servicios prestados en el CIIES
            </StyledA>
          </li>
          <li>Justificante de ingresos mensuales de la unidad familiar</li>
          <li>
            <StyledA href="/medical_form.pdf" download="informe_medica.pdf">
              Informe médico para CIIES
            </StyledA>
          </li>
        </ul>
      </Togglable>
      <br />

      <Togglable label="Normativa Municipal">
        <Paragraph>
          <StyledA href="/regulations.pdf" download="reglamento.pdf">
            Reglamento de Régimen interior del Centro Integral de Inclusión y
            Emergencia Social (CIIES) del Ayuntamiento de Vigo
          </StyledA>
        </Paragraph>
        <Paragraph>
          <StyledA href="/plan.pdf" download="servicios.pdf">
            CIIES - Servizos e recursos ofrecidos
          </StyledA>
        </Paragraph>
      </Togglable>
    </Wrapper>
  );
};

export default Access;
