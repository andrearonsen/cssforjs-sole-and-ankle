import styled from "styled-components";
import { Logo } from "../Logo/Logo";
import { SuperHeader } from "../SuperHeader/SuperHeader";
import { COLORS, WEIGHTS } from "../../constants";

export const Header = () => (
  <header>
    <SuperHeader />
    <MainHeader>
      <Logo />
      <Nav>
        <NavLink href="/sale">Sale</NavLink>
        <NavLink href="/new">New releases</NavLink>
        <NavLink href="/men">Men</NavLink>
        <NavLink href="/woman">Woman</NavLink>
        <NavLink href="/kids">Kids</NavLink>
        <NavLink href="/collections">Collections</NavLink>
      </Nav>
    </MainHeader>
  </header>
);

const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  padding: 26px 0;
  margin-right: 33vb;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;
