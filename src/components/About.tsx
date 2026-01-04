import React from 'react';
import '../about.css';

const About = () => {
  return (
  <div className="about-container">
      <div className="about-hero">
        <div className="about-portrait">
          <img
            src="/images/Dare-Ogunnaike_Portrait.jpg"
            alt="Portrait of Dare Ogunnaike"
            loading="lazy"
          />
        </div>
        <div className="about-copy">
          <p className="about-lede">
            Dare is an Art Director and Graphic Designer at Belonwus. Previously, he was a Brand Designer at Rise Vest. He received a BSc in Architecture from the University of Lagos in 2017 and has since built a multifaceted and dynamic career in design, spanning architecture, industrial design, and set design.
          </p>
          <p className="about-body">
            Through his work at Belonwus, Dare has collaborated on projects for Sporting Lagos, Bamboo, Spotify, OctaFX, Piggyvest, Stanbic IBTC, 9mobile, and more. He led the design of the Rise Vest office building in Lagos, redefining the traditional workspace with design solutions that prioritised environmental efficiency, brand ethos and aesthetic appeal for the tech-led business and its employees, and worked with Afrominima to design furniture, household objects, and boutique spaces.
          </p>
          <p className="about-body">
            His influence in the creative field has been highlighted through talks and projects showcased at creative forums like UnderTheHood hosted by Cowrywise and The Huddle.
          </p>
          <p className="about-email">
            <a href="mailto:dareogunnaike@gmail.com">dareogunnaike@gmail.com</a>
          </p>
      </div>
    </div>
    
      <div className="about-social about-social-left">
        <a
          className="social-link"
          href="https://www.instagram.com/dare.ogunnaike/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram profile"
        >
          <svg
            className="social-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z" />
            <circle cx="12" cy="12" r="3.4" />
            <circle cx="17.2" cy="6.8" r="0.9" />
          </svg>
        </a>
        <a
          className="social-link"
          href="https://www.linkedin.com/in/dareogunnaike/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <svg
            className="social-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
            <path d="M7.2 10h1.7v6.1H7.2z" />
            <circle cx="8" cy="7.6" r="1" />
            <path d="M11.2 10h1.7v0.9c.25-.55.9-1.1 1.8-1.1 1.3 0 2.3.9 2.3 2.6V16h-1.7v-3.2c0-.9-.4-1.3-1-1.3s-1.1.5-1.1 1.3V16h-1.7z" />
          </svg>
        </a>
        <a
          className="social-link"
          href="https://twitter.com/dareogunnaike"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter profile"
        >
          <svg
            className="social-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M18.5 3.5h-13a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-13a2 2 0 0 0-2-2Zm-2.9 3.5L12 11.2 9.3 7H7l4 5.8L7.1 17h2.2l2.7-3.9 2.7 3.9h2.2l-4-5.8 3.9-5.5Z" />
          </svg>
        </a>
    </div>
  </div>
);
};

export default About;
