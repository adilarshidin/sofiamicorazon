import { styled } from "styled-components";

import header from "../assets/header.webp";
import Nav from "./Nav";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  z-index: 0;
  border-bottom: solid 2px darkgreen;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Image src={header} />
      <Nav />
    </StyledHeader>
  );
};

export default Header;
