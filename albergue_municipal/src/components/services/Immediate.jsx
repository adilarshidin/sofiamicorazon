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

const Immediate = () => {
  return (
    <Wrapper>
      <StyledH2>Proyectos de respuesta inmediata</StyledH2>
      <br />
      <h3>Albergue</h3>
      <Paragraph>
        Centro para el alojamiento y mantenimiento por un período limitado de
        tiempo. Dispone de 38 plazas (30 para varones y 8 para mujeres). Está
        abierto los 365 días del año en horario de 20:00 a 09:00 horas.
      </Paragraph>
      <Paragraph>
        El acceso es voluntario y las plazas se asignan por orden de llegada,
        aunque cuando el número de usuarios pendientes de acceder es superior a
        las plazas disponibles, la asignación se realiza por valoración técnica
        del equipo del CIIES.
      </Paragraph>
      <Paragraph>
        Las personas usuarias pueden hacer uso del servicio por un período
        máximo de 10 días y después de este tiempo tienen que permanecer 10 días
        fuera del recurso.
      </Paragraph>
      <br />
      <h3>Comedor social</h3>
      <Paragraph>
        Establecimiento en el que se ofrece el servicio de comedor los 365 días
        del año en horario de 13:00 a 15:00 horas. Dispone de 70 plazas mixtas.
      </Paragraph>
      <Paragraph>
        El acceso es voluntario: puede realizarse solicitando plaza directamente
        en el Centro, por derivación interna o de recursos externos. Las plazas
        se asignan por orden de llegada o por valoración técnica del equipo del
        CIIES (con prioridad de acceso para todas aquellas personas con menores
        recursos económicos).
      </Paragraph>
      <Paragraph>
        Las personas usuarias pueden hacer uso del servicio por un máximo de 7
        días. Después de este tiempo tienen que permanecer 7 días fuera del
        recurso para volver.
      </Paragraph>
      <br />
      <h3>Unidad de higiene</h3>
      <Paragraph>
        Comprende los servicios de duchas, lavandería y ropero destinados a las
        personas usuarias del CIIES y un turno libre para personas que no estén
        haciendo uso de ningún servicio del CIIES.
      </Paragraph>
      <br />
      <h3>Servicio de consigna</h3>
      <Paragraph>
        Con el objetivo de garantizar la custodia de sus pertenencias a todas
        las personas usuarias de alguno de los servicios del CIIES.
      </Paragraph>
      <br />
      <h3>Servicio de Dirección Postal y Empadronamiento</h3>
      <Paragraph>
        Con el objeto de garantizar el acceso a los servicios que requieran del
        empadronamiento en la ciudad (atención sanitaria, servicios comunitarios
        básicos, etc.) así como facilitar la recepción de correspondencia,
        utilizando la dirección postal del CIIES.
      </Paragraph>
    </Wrapper>
  );
};

export default Immediate;
