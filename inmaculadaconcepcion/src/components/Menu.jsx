import styled from "styled-components";
import { Link } from "react-router";

import crossIcon from "../assets/cross-2.png";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: #000;
  padding: 1rem 2rem;
`;

const MenuLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Image = styled.img`
  color: white;
  max-width: 30px;
  max-height: 30px;
`;

const Menu = () => {
  return (
    <StyledMenu>
      <Image src={crossIcon} alt="icono de la cruz católica dorada" />
      <MenuLink to={"/"}>Inicio</MenuLink>
      <MenuLink to={"/about"}>La Iglesia</MenuLink>
      <MenuLink to={"/services"}>Servicios</MenuLink>
    </StyledMenu>
  );
};

export default Menu;
