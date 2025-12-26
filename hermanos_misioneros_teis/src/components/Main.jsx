import { styled } from "styled-components";

import FirstMagazine from "../assets/magazine1.webp";
import SecondMagazine from "../assets/magazine2.webp";

const Main = () => {
  const Container = styled.div`
    margin: 0 3% 0 3%;
    padding: 3%;
    display: flex;
    flex-direction: column;
    border: 2px solid darkgreen;
    background: white;
  `;

  const Image = styled.img`
    margin: 2%;
    padding: 2%;
    border: 2px solid darkgreen;
    background: rgb(1,50,32);
    background: linear-gradient(159deg, rgba(1,50,32,1) 0%, rgba(57,255,20,1) 100%);
  `;

  const Paragraph = styled.p`
    padding: 2%;
  `;

  return (
    <Container>
      <h2>Quienes somos...</h2>
      <Paragraph><strong>Hermanos Misioneros de los Enfermos Pobres</strong> es una Institución Religiosa cuyo objetivo es ayudar a las personas que se encuentran en situación de riesgo de exclusión social.</Paragraph>
      <Paragraph>Partiendo de ideales basados en el <strong>Evangelio</strong>, entre los que destaca la solidaridad, nuestra Organización está comprometida con los más desfavorecidos, ofreciéndoles apoyo y soporte integral, que garanticen su recuperación e inserción en la sociedad.</Paragraph>
      <Image src={FirstMagazine} />
      <Image src={SecondMagazine} />
    </Container>
  );
};

export default Main;
