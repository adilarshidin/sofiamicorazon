import { styled } from "styled-components";

import RedCross from "../assets/red_cross.webp";
import Menu from "./Menu";

const Bulge = styled.div`
  position: absolute;
  bottom: -32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: solid 5px;
  border-color: #cd1c18;
  border-background: linear-gradient(326deg, #cd1c18 0%, #66023c 74%);

  background-color: #f2f0ef;
  background-image: linear-gradient(315deg, #f2f0ef 0%, #fbceb1 74%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 60%;
  height: 60%;
  object-fit: contain;
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  line-height: 0;
`;

const StyledHeader = styled.header`
  position: relative;
  z-index: 1;

  border: solid 5px;
  border-color: #cd1c18;
  border-background: linear-gradient(326deg, #cd1c18 0%, #66023c 74%);

  background-color: #f2f0ef;
  background-image: linear-gradient(315deg, #f2f0ef 0%, #fbceb1 74%);

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Menu />
      <Bulge>
        <IconLink href="https://www2.cruzroja.es/es/web/cruzvermella">
          <Image src={RedCross} alt="cruz roja icon" />
        </IconLink>
      </Bulge>
    </StyledHeader>
  );
};

export default Header;
