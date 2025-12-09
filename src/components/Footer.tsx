import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem 0;
  text-align: center;
  font-family: var(--font-primary);
  font-size: 0.9rem;
  color: #666;
  border-top: 1px solid #eee;
  margin-top: auto;
`;

const FooterLink = styled.a`
  color: #111;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  &:hover {
    color: #888;
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      © 2025 Developed and Designed by{' '}
      <FooterLink href="https://damilolaogunnaike.com" target="_blank" rel="noopener noreferrer">
        Ogunnaike Damilola
      </FooterLink>
    </FooterContainer>
  );
};

export default Footer;
