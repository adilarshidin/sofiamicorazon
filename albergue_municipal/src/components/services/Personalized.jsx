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

const Personalized = () => {
  return (
    <Wrapper>
      <StyledH2>Proyectos de atención personalizada</StyledH2>
      <br />
      <h3>Centro de atención social continuada</h3>
      <Paragraph>
        Centro abierto permanentemente en horario continuado o en horario
        complementario al resto de los recursos sociales de atención a las
        personas en situación de exclusión o emergencia social en el que se
        ofertan servicios de atención a las necesidades básicas y/o urgentes de
        las personas usuarias.
      </Paragraph>
      <br />
      <h3>Centro de día de inclusión</h3>
      <Paragraph>
        Espacio socio-educativo de régimen diurno dirigido a las personas que se
        encuentran en una situación de riesgo y/o de exclusión social, sin hogar
        o urgencia social, que presentan déficits o carencias susceptibles de
        rehabilitación o mejora.
      </Paragraph>
      <Paragraph>
        El acceso se produce por derivación de los Servicios Sociales
        Comunitarios Básicos o del propio CIIES y para permanecer es
        imprescindible iniciar un proceso de intervención con un Plan de
        Atención Individual (PIA).
      </Paragraph>
      <br />
      <h3>Centro de acogida e inclusión</h3>
      <Paragraph>
        Centro que, en régimen residencial temporal y mediante una actuación
        programada, ofrece oportunidades de ajuste personal e incorporación
        socio-laboral a las personas en situación o riesgo de exclusión social.
      </Paragraph>
      <Paragraph>
        El Centro estructura su trabajo a través de dos programas:
      </Paragraph>
      <ul>
        <li>
          <Paragraph>
            Programa básico de acogida e inclusión social, en el que las
            personas usuarias reciben atención social, mantenimiento y
            alojamiento de manera estable por un período de tiempo determinado
            (6 meses prorrogables), mientras participan en un proyecto de
            inserción encaminado al logro de su incorporación social y laboral.
          </Paragraph>
          <Paragraph>
            El centro cuenta con una capacidad de 11 plazas (5 para mujeres y 6
            para hombres) y para acceder al programa es necesaria derivación de
            los Servicios Sociales Comunitarios Básicos o derivación del propio
            CIIES.
          </Paragraph>
        </li>

        <li>
          <Paragraph>
            Programa de transición a la vida autónoma, recurso residencial de
            segundo nivel, que ofrece un alojamiento provisional de
            características normalizadas para favorecer la transición a la vida
            autónoma.
          </Paragraph>
          <Paragraph>
            Cuenta con una capacidad de 8 plazas para varones y va destinado a
            personas que, siendo vulnerables a la exclusión social, cuentan con
            capacidad y posibilidades de inserción y normalización, con
            autonomía en las áreas de habilidades básicas de la vida diaria
            (ABVD), habilidades sociales y en el área económica.
          </Paragraph>
          <Paragraph>
            El acceso se produce mediante derivación externa o del propio CIIES
            cuando la persona supera los objetivos fijados en el Piso Básico y
            tiene perfil laboral, formativo o formativo-laboral.
          </Paragraph>
        </li>
      </ul>
      <br />
      <h3>Servicio de Atención Psicosocial</h3>
      <Paragraph>
        Con el objetivo de ofrecer apoyo e intervención especializada en los
        casos en los que la persona usuaria tenga problemas de índole
        psicológica relacionados con su proceso de exclusión y puedan
        constituirse cómo una dificultad para la inserción e intervención social
        en la que intervienen Trabajadores Sociales, Educadores y Técnicos en
        Integración Social.{" "}
      </Paragraph>
    </Wrapper>
  );
};

export default Personalized;
