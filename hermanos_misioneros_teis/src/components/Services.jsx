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

const Services = () => {
  return (
    <Container>
      <h2>Servicio social</h2>
      <Paragraph>
        La Institución de los{" "}
        <strong>Hermanos Misioneros de los Enfermos Pobres</strong> tiene como
        objetivo la ayuda a{" "}
        <strong>personas en riesgo de exclusión social</strong>. Para llevar a
        cabo este fin, ofrecen una serie de servicios:
      </Paragraph>
      <ul>
        <li>
          <strong>Cobertura residencial</strong>
        </li>
        <li>
          <strong>Atención médica</strong>
        </li>
        <li>
          <strong>Atención bio-psico-social</strong>
        </li>
        <li>
          <strong>Orientación laboral</strong>
        </li>
        <li>
          <strong>Transición a la vida autónoma</strong>
        </li>
        <li>
          <strong>Atención y formación espiritual</strong>
        </li>
      </ul>

      <Paragraph>
        Durante su estancia, se les asignan trabajos y responsabilidades{" "}
        <strong>de mantenimiento</strong> en el centro, además de pautas de{" "}
        <strong>convivencia con los demás</strong>, que nos darán la medida de
        sus <strong>aptitudes, habilidades y capacidades</strong> para su
        promoción, y permitirá al equipo de inclusión trabajar con la persona,
        aquellos aspectos en los que tiene que mejorar.
      </Paragraph>
      <Paragraph>
        Estas rutinas de colaboración y adquisición de{" "}
        <strong>pautas de conducta</strong>, están encaminadas a mejorar su{" "}
        <strong>autoestima y capacitación</strong>, a la vez que se formalizan
        dentro de un programa de <strong>recuperación personal</strong>, al que
        denominaremos <strong>Itinerario Personal de Inclusión</strong>.
      </Paragraph>

      <h3>Atención Sanitaria</h3>
      <Paragraph>
        A menudo los problemas de salud acompañan a la exclusión, bien por ser
        su desencadenante o su consecuencia.
      </Paragraph>
      <Paragraph>
        Un alto porcentaje de usuarios de la Casa de Acogida y del Albergue,
        presenta patologías agudas de tipo físico y/o psiquiátrico.
      </Paragraph>
      <Paragraph>
        Para atender a esta problemática, el equipo del Area de Salud desarrolla
        su labor en la farmacia del centro, autorizada mediante un convenio con
        el SERGAS por el cual se nos abastece de medicamentos, estando formado
        por:
      </Paragraph>
      <ul>
        <li>1 supervisor</li>
        <li>2 DUE</li>
        <li>5 auxiliares</li>
      </ul>

      <Paragraph>
        A diario se ejecuta una actividad frenética, para atender a los
        residentes y alberguistas con problemas diversos de salud:
      </Paragraph>
      <ul>
        <li>ingesta de medicación pautada</li>
        <li>control de glucemias, tensión, temperatura, oxígeno</li>
        <li>citas especialistas</li>
        <li>cambios de sondas</li>
        <li>administración de inyectables</li>
        <li>administarción de metadona conforme pautas de UAD</li>
        <li>curas</li>
        <li>consultas</li>
        <li>
          atención a la dependencia: duchas, comer, posturales, colectores,
          aseo, levantar y acostar, pañales, hacer camas, gestión ropa, etc.
        </li>
        <li>peluquería y barbería</li>
      </ul>
    </Container>
  );
};

export default Services;
