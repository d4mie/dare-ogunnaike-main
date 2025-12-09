import React from 'react';
import '../about.css';

const About = () => (
  <div className="about-container">
    <div className="about-left">
      <div className="about-text">
        <div className="language-row">
          <span className="language-label">FR</span>
          <p className="language-body">
            Calame.Bureau est un bureau de direction artistique et design graphique basé à Paris, fondé par Arthur Calame en 2018. Le bureau dessine des caractères typographiques, conçoit des identités visuelles et des objets éditoriaux, pour des clients dans un champ de domaines variés.
          </p>
        </div>
        <div className="language-row">
          <span className="language-label">EN</span>
          <p className="language-body">
            Calame.Bureau is a Paris-based art direction practice founded by Arthur Calame in 2018. The bureau designs typefaces, visual identities and editorial objects for clients in a wide range of fields.
          </p>
        </div>
      </div>
      <div className="abstract-graphic">
        <div className="swirl-graphic" />
      </div>
    </div>
    
    <div className="about-right">
      <div className="about-content">
        <div className="greeting-section">
          <div className="greeting-wrapper">
            <p className="greeting">Hello 👋 Bonjour, n'hésitez pas à nous écrire pour recevoir un portfolio détaillé, ou pour nous rencontrer et discuter d'un projet.<br />
            Hello, don't hesitate to write to us to receive a detailed portfolio, or to meet and discuss a project.</p>
          </div>
        </div>
        
        <div className="contact-section info-row">
          <div className="info-label">Contact</div>
          <div className="info-divider" />
          <div className="info-content">
            <p>@calame.bureau</p>
            <p>contact@calame-bureau.com</p>
            <p>+33 (0)1 23 45 67 89</p>
            <p>123 Rue du Faubourg Saint-Honoré</p>
            <p>75008 Paris, France</p>
          </div>
        </div>

        <div className="services-section info-row">
          <div className="info-label">Services</div>
          <div className="info-divider" />
          <div className="info-content">
            <ul className="services-list">
              <li>Branding</li>
              <li>Art Direction</li>
              <li>Editorial Design</li>
              <li>Type Design</li>
              <li>Book Design</li>
              <li>Visual Identity</li>
              <li>Lettering</li>
              <li>Logotype</li>
              <li>Lookbook</li>
              <li>Poster</li>
              <li>Signage</li>
              <li>Custom Type</li>
              <li>Webdesign</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
