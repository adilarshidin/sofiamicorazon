import { styled } from "styled-components";

import RedCross from "../assets/red_cross.png";

const Bulge = styled.div`
  position: absolute;
  bottom: -32px;
  left: 50%;
  transform: translateX(-50%);

  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: solid 5px;
  border-color: #cd1c18;
  border-background: linear-gradient(326deg, #cd1c18 0%, #66023c 74%);; 
  
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

const StyledHeader = styled.header`
  position: relative;
  height: 72px;
  border: solid 5px;
  border-color: #cd1c18;
  border-background: linear-gradient(326deg, #cd1c18 0%, #66023c 74%);; 

  background-color: #f2f0ef;
  background-image: linear-gradient(315deg, #f2f0ef 0%, #fbceb1 74%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Bulge>
        <Image src={RedCross} />
      </Bulge>
    </StyledHeader>
  );
};

export default Header;
