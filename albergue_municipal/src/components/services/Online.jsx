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

const StyledA = styled.a`
  text-decoration: none;
`;

const Online = () => {
  return (
    <Wrapper>
      <StyledH2>Obligados al registro electrónico</StyledH2>
      <Paragraph>
        Los solicitantes obligados a relacionarse a través de medios
        electrónicos con las Administraciones públicas para la realización de
        cualquier trámite de un procedimiento administrativo según la obligación
        impuesta por el artículo 14.2 de la Ley 39/2015, del 1 de octubre, de
        Procedimiento Administrativo Común de las Administraciones Públicas
        (LPAC) y artículo 9 de la Ordenanza de Administración Electrónica del
        Ayuntamiento de Vigo, serán los siguientes sujetos:
      </Paragraph>
      <ul>
        <li>Las personas jurídicas.</li>
        <li>Las entidades sin personalidad jurídica.</li>
        <li>
          Aquelas personas que ejerzan una actividad profesional para la que se
          requiera colegiación obligatoria, para los trámites y actuaciones que
          realicen en el ejercicio de estas actividades. En todo caso, se
          entienden incluídas las notarías y registros de la propiedad y
          mercantiles.
        </li>
        <li>
          Las personas que representen a una persona interesada que sea obligada
          a relacionarse electronicamente.
        </li>
        <li>
          Las personas empleadas del Ayuntamiento de Vigo para los trámites y
          actuaciones que realicen con razón de su condición, en la forma
          prevista en esta ordenanza.
        </li>
        <li>
          Los órganos de representación de las personas empleadas municipales,
          bien sean delegados/as de personal, juntas de personal, comité de
          empresa o cualquier otro órgano establecido por el Ayuntamiento de
          Vigo, tanto en sus competencias en mesa de negociación como en el
          resto de sus funciones de representación, de negociación colectiva y
          de participación institucional.
        </li>
        <li>
          Las personas que soliciten participar en los procesos selectivos de
          acceso al emprego público en el Ayuntamiento de Vigo, sin prejuicio,
          en su caso, de la habilitación de los medios correspondientes para tal
          fin.
        </li>
        <li>
          Las personas que soliciten su participación en procedimientos de
          concurrencia competitiva o participativa en cuanto a planes o
          programas determinados por el Ayuntamiento de Vigo y entidades
          dependientes, cuando así lo establezcan las bases reguladoras y
          siempre que quede justificado en la memoria del expediente que gozan
          de la dispoñibilidad de los medios electrónicos necesarios, sea por su
          capacidad económica, técnica, profesional o cualquier otro motivo.
        </li>
        <li>
          Las personas trabajadoras en régime de autónomos, para los trámites y
          actuaciones que realicen en el ejercicio de su actividad profesional.
        </li>
        <li>
          Las personas miembros de la Corporación municipal en cualquier trámite
          que sea instrumentado con el Ayuntamiento como consecuencia de tal
          condición.
        </li>
        <li>
          Las personas que actúen en representación de alguna de estas persoans
          obligadas.
        </li>
        <li>Otras personas que la legislación sobre la materia establezca.</li>
      </ul>
      <Paragraph>
        Ya que luego, los obligados legalmente deberán presentar y tramitar por
        medios electrónicos la solicitud y documentación a través de la sede
        electrónica del Ayuntamiento de Vigo, por cualquier de los mecanismos de
        identificación y firma electrónica admitidos en la sede electrónica, que
        se pueden consultar en el enlace{" "}
        <StyledA
          href="https://sede.vigo.org/expedientes/usuarios/login.jsp?lang=es"
          target="_blank"
        >
          Carpeta ciudadana
        </StyledA>
        . En el caso de que se adjunte la solicitud y/o la documentación
        complementaria presencialmente por parte de los obligados por el art.
        14.2 LPAC y artículo 2 de la Ordenanza de Administración Electrónica del
        Ayuntamiento de Vigo, se requirirá su subsanación mediante su
        presentación electrónica.
      </Paragraph>
      <Paragraph>
        Los solicitantes no obligados podrán adjuntar su solicitud y la
        documentación complementaria, en soporte papel, presencialmente ante el
        Registro general del Ayuntamiento de Vigo, o en cualquiera de los
        lugares y registros establecidos en la normativa reguladora del
        procedimiento administrativo común. Así mismo y, pese a no estar
        obligados, podrán optar por la tramitación electrónica de su solicitud y
        documentación complementaria a través de la sede electrónica del
        Ayuntamiento de Vigo, y por cualquiera de los mecanismos de
        identificación y firma admitidos.
      </Paragraph>
    </Wrapper>
  );
};

export default Online;
