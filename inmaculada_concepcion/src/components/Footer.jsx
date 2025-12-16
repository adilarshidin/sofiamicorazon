import styled from "styled-components";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";

const StyledFooter = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 1%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const StyledWhatsappIcon = styled(FaWhatsapp)`
  color: darkgreen;
`;

const StyledTelegramIcon = styled(FaTelegram)`
  color: blue;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Hecho por: Adil Arshidin</p>
      <a href="https://wa.me/+34603249025" target="_blank">
        <StyledWhatsappIcon size={20} textAnchor="Whatsapp" />
      </a>
      <a href="https://t.me/adiltherunningman">
        <StyledTelegramIcon size={20} />
      </a>
    </StyledFooter>
  );
};

export default Footer;
