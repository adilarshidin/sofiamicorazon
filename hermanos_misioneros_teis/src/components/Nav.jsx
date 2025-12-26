import { styled } from "styled-components";
import { Link } from "react-router";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;

  position: relative;
  width: 70%;
  bottom: 50px;

  background: rgb(1,50,32);
  background: linear-gradient(159deg, rgba(1,50,32,1) 0%, rgba(57,255,20,1) 100%);

  border: solid 2px darkgreen;
  border-radius: 5px;
`;

const StyledLink = styled(Link)`
  padding: 1%;

  text-decoration: none;
  color: white;

  &:hover {
    color: orange;
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <StyledLink to="/">Bienvenidos</StyledLink>
      <StyledLink to="/services">Servicios</StyledLink>
      <StyledLink to="/philosophy">Filosofía</StyledLink>
      <StyledLink to="/address">Dirección y contactos</StyledLink>
      <StyledLink to="/publications">Publicaciones</StyledLink>
    </StyledNav>
  );
};

export default Nav;
