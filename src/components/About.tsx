import React from 'react';
import '../about.css';

const About = () => {
  return (
    <div className="aboutPage">
      <section className="aboutHero" aria-label="About intro">
        <div className="aboutHero__media">
          <img
            src="/images/Dare-Ogunnaike_Portrait.jpg"
            alt="Portrait of Dare Ogunnaike"
            loading="lazy"
          />
        </div>

        <div className="aboutHero__text">
          <p className="aboutBioHighlight">
            Dare is an Art Director and Graphic Designer at Belonwus. Previously, he was a Brand
            Designer at Rise Vest.
            <br />
            <br />
            He received a BSc in Architecture from the University of Lagos in 2017 and has since
            built a multifaceted and dynamic career in design, spanning architecture, industrial
            design, and set design.
            <br />
            <br />
            <a className="aboutEmail" href="mailto:dareogunnaike@gmail.com">
              dareogunnaike@gmail.com
            </a>
          </p>
        </div>
      </section>

      <section className="aboutCvGrid" aria-label="About details">
        <div className="aboutCvCol">
          <div className="aboutCvSection">
            <h3 className="aboutCvTitle">EDUCATION</h3>
            <div className="aboutCvBody">
              <p>
                <strong>BSc</strong> in Architecture
                <br />
                University of Lagos
                <br />
                2017
              </p>
            </div>
          </div>

          <div className="aboutCvSection">
            <h3 className="aboutCvTitle">TALKS</h3>
            <ul className="aboutCvList">
              <li>UnderTheHood (Cowrywise)</li>
              <li>The Huddle</li>
            </ul>
          </div>
        </div>

        <div className="aboutCvCol">
          <div className="aboutCvSection">
            <h3 className="aboutCvTitle">WORK EXPERIENCE</h3>
            <ul className="aboutCvList">
              <li>
                <strong>Art Director &amp; Graphic Designer</strong>
                <br />
                Belonwus
              </li>
              <li>
                <strong>Brand Designer</strong>
                <br />
                Rise Vest
              </li>
            </ul>
          </div>

          <div className="aboutCvSection">
            <h3 className="aboutCvTitle">HIGHLIGHTS</h3>
            <ul className="aboutCvList">
              <li>Led the design of the Rise Vest office building in Lagos</li>
              <li>
                Worked with Afrominima on furniture, household objects, and boutique spaces
              </li>
            </ul>
          </div>
        </div>

        <div className="aboutCvCol">
          <div className="aboutCvSection">
            <h3 className="aboutCvTitle">COLLABORATIONS</h3>
            <ul className="aboutCvList">
              <li>Sporting Lagos</li>
              <li>Bamboo</li>
              <li>Spotify</li>
              <li>OctaFX</li>
              <li>Piggyvest</li>
              <li>Stanbic IBTC</li>
              <li>9mobile</li>
            </ul>
          </div>
        </div>

        <div className="aboutCvCol">
          <div className="aboutCvSection">
            <h3 className="aboutCvTitle">CONTACT</h3>
            <ul className="aboutCvList aboutCvList--tight">
              <li>
                <a className="aboutLink" href="mailto:dareogunnaike@gmail.com">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="aboutCvSpacer" aria-hidden="true" />

        <div className="aboutCvSocial" aria-label="Social links">
          <a className="aboutSocialLink" href="mailto:dareogunnaike@gmail.com">
            Email
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
