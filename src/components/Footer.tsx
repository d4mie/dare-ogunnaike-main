import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem 0;
  text-align: center;
  font-family: var(--font-primary);
  font-size: 0.9rem;
  color: #c8c8c8;
  border-top: 1px solid #1f1f1f;
  margin-top: auto;
  background: #0b0b0b;
`;

const FooterLink = styled.a`
  color: #f3f3f3;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  &:hover {
    color: #e0e0e0;
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
