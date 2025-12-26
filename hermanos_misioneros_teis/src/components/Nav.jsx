import { styled } from "styled-components";
import { Link } from "react-router";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  background: linear-gradient(
    159deg,
    rgba(1, 50, 32, 1) 0%,
    rgba(57, 255, 20, 1) 100%
  );
  border: solid 2px darkgreen;
  border-radius: 5px;

  /* allow links to wrap on mobile */
  flex-wrap: wrap;
  padding: 0.5rem;

  /* remove bottom offset */
  position: static;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
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
