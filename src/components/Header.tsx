import React from 'react';
import styled from 'styled-components';
import '../styles/typography.css';
import { Link, NavLink } from 'react-router-dom';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  font-family: var(--font-primary);
  background: transparent;
  color: #fff;
  mix-blend-mode: difference; /* exclusion effect on scroll */

  @media (max-width: 700px) {
    position: static;
    margin-bottom: 0;
  }
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2vw;
  position: relative;
  margin: 0 auto;

  @media (max-width: 1100px) {
    padding: 0 1vw;
  }
  @media (max-width: 700px) {
    padding: 0 1vw;
  }
`;

const Logo = styled.a`
  font-size: var(--f-s);
  font-weight: 400;
  color: #fff;
  margin: 0;
  pointer-events: auto;
  cursor: pointer;
  text-decoration: none;
  display: block;
  letter-spacing: -0.01em;

  &:hover {
    opacity: 0.8;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  pointer-events: auto;
  align-items: center;

  @media (max-width: 700px) {
    gap: 0.75rem;
  }
`;

const StyledNavLink = styled(NavLink)<{ $isCategory?: boolean; $hideOnMobile?: boolean }>`
  text-decoration: none;
  color: #fff;
  font-size: var(--f-s);
  font-weight: 400;
  pointer-events: auto;
  cursor: pointer;
  letter-spacing: -0.01em;
  transition: color 0.2s;
  &.active, &:hover {
    color: #555;
  }

  @media (max-width: 700px) {
    display: ${props => props.$hideOnMobile ? 'none' : 'inline-flex'};
  }
`;

const XNavLink = styled(NavLink)`
  color: #fff;
  font-size: 1.2em;
  font-weight: 700;
  margin-right: 0.2rem;
  text-decoration: none;
  cursor: pointer;
  padding: 0 0.2em 0 0;
  line-height: 1;
  display: flex;
  align-items: center;
  transition: color 0.2s;
  pointer-events: auto;
  &:hover, &.active {
    color: #888;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo href="/">Dare Ogunnaike</Logo>
        <Nav>
          <StyledNavLink to="/about">About</StyledNavLink>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header; 