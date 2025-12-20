import { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";

import CityCouncelLogo from "../assets/concello-vigo-logo.webp";

const OuterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Image = styled.img`
  position: relative;
  max-height: 60px;
  width: auto;
  display: block;
`;

const LogoLink = styled.a`
  display: inline-block;
  line-height: 0;
`;

const MenuLink = styled(Link)`
  color: darkred;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

const Navigation = styled.nav`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1%;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    flex-direction: column;
    background: white;
    border-top: 1px solid #ddd;
    z-index: 2;

    ${({ $open }) =>
      $open
        ? `
        max-height: 300px;
        opacity: 1;
        pointer-events: auto;
      `
        : `
        max-height: 0;
        opacity: 0;
        pointer-events: none;
    `};

    overflow: hidden;
    transition: all 0.3s ease;
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: darkred;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <OuterWrapper>
      <InnerWrapper>
        <LogoLink href="https://hoxe.vigo.org/">
          <Image src={CityCouncelLogo} alt="Concello de Vigo logo" />
        </LogoLink>

        <Hamburger
          aria-label="Abrir menú"
          onClick={() => setOpen((prev) => !prev)}
        >
          <RxHamburgerMenu />
        </Hamburger>

        <Navigation $open={open}>
          <MenuLink to="/access" onClick={() => setOpen(false)}>
            Solicitar acceso
          </MenuLink>
          <MenuLink to="/" onClick={() => setOpen(false)}>
            Inicio
          </MenuLink>
          <MenuLink to="/services" onClick={() => setOpen(false)}>
            Programas y servicios
          </MenuLink>
          <MenuLink to="/contacts" onClick={() => setOpen(false)}>
            Dirección y contactos
          </MenuLink>
        </Navigation>
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default Menu;
