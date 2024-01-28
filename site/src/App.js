import './App.css';
import React, { useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Eva from './assets/eva-headshot.jpeg';
import Wing from './assets/wing-headshot.jpeg';
import Laura from './assets/laura-headshot.jpeg';
import Eric from './assets/eric-headshot.jpeg';
import Dina from './assets/dina-headshot.jpeg';
import Efat from './assets/efat-headshot.jpeg';
import Somaya from './assets/somaya-headshot.jpeg'
;
import linkedin from './assets/linkedin-icon.svg';
import email from './assets/email-icon (4).svg';
import whatsapp from './assets/whatsapp-icon.svg';

function App() {
  useEffect(() => {
    document.title = 'McGill 2024 team';
  }, []);

  return (
    <div>
      <Header />
      <div className="content-wrap">
        <div className="section-wrap">
          <div className="section-header">Meet the team</div>
          <div className="gallery-wrap">
          <div className="gallery-row">
              <div className="profile-flex">
                <img className="headshot" src={Somaya} alt="Somaya Amiri headshot"/>
                <div className="profile-name">Somaya Amiri</div>
                <div className="profile-subheader">BCL/JD Candidate</div>
                <div className="contact-wrap">
                  <a href="mailto:somaya.amiri@mail.mcgill.ca">
                    <img className="email-icon" src={email} alt="email icon" />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/somaya-amiri1/">
                    <img className="linkedin-icon" src={linkedin} alt="linkedin logo icon" />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://wa.me/17782454686">
                    <img className="whatsapp-icon" src={whatsapp} alt="whatsapp logo icon" />
                  </a>
                </div>
              </div>
              <div className="profile-flex">
                <img className="headshot" src={Laura} alt="Laura Andrade headshot"/>
                <div className="profile-name">Laura Andrade</div>
                <div className="profile-subheader">BCL/JD Candidate</div>
                <div className="contact-wrap">
                  <a href="mailto:laura.andrade2@mail.mcgill.ca">
                    <img className="email-icon" src={email} alt="email icon" />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lauraandrademontreal/">
                  <img className="linkedin-icon" src={linkedin} alt="linkedin logo icon" />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://wa.me/15149805465">
                    <img className="whatsapp-icon" src={whatsapp} alt="whatsapp logo icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="gallery-row">
              <div className="profile-flex">
                <img className="headshot" src={Wing} alt="Wing Wong headshot"/>
                <div className="profile-name">Wing Wong</div>
                <div className="profile-subheader">BCL/JD Candidate</div>
                <div className="contact-wrap">
                  <a href="mailto:wing.wong2@mail.mcgill.ca">
                    <img className="email-icon" src={email} alt="email icon" />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/wing-w-061851128/">
                  <img className="linkedin-icon" src={linkedin} alt="linkedin logo icon" />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://wa.me/12263775013">
                    <img className="whatsapp-icon" src={whatsapp} alt="whatsapp logo icon" />
                  </a>
                </div>
              </div>
              <div className="profile-flex-last">
                <img className="headshot" src={Eva} alt="Eva Wu headshot"/>
                <div className="profile-name">Eva Wu</div>
                <div className="profile-subheader">BCL/JD Candidate</div>
                <div className="contact-wrap">
                  <a href="mailto:eva.wu@mail.mcgill.ca">
                    <img className="email-icon" src={email} alt="email icon" />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/eva-wu-a127b812b/">
                    <img className="linkedin-icon" src={linkedin} alt="linkedin logo icon" />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://wa.me/14389269628">
                    <img className="whatsapp-icon" src={whatsapp} alt="whatsapp logo icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-wrap">
          <div className="section-header">Our coaches</div>
          <div className="gallery-wrap">
          <div className="gallery-row">
              <div className="profile-flex">
                <img className="headshot" src={Eric} alt="Eric Bédard headshot"/>
                <div className="profile-name">Eric Bédard</div>
                <div className="profile-subheader">Partner, Woods LLP</div>
                <div className="contact-wrap">
                  <a href="mailto:ebedard@woods.qc.ca">
                    <img className="email-icon" src={email} alt="email icon" />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/eric-bedard-woods/">
                  <img className="linkedin-icon" src={linkedin} alt="linkedin logo icon" />
                  </a>
                </div>
              </div>
              <div className="profile-flex">
                <img className="headshot" src={Dina} alt="Dina Prokic headshot"/>
                <div className="profile-name">Dina Prokic</div>
                <div className="profile-subheader">Associate, Woods LLP</div>
                <div className="contact-wrap">
                  <a href="mailto:dprokic@woods.qc.ca">
                    <img className="email-icon" src={email} alt="email icon" />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dina-p-35965560/">
                  <img className="linkedin-icon" src={linkedin} alt="linkedin logo icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="gallery-row">
              <div className="profile-flex-last">
                <img className="headshot" src={Efat} alt="Efat Elsherif headshot"/>
                <div className="profile-name">Efat Elsherif</div>
                <div className="profile-subheader-small">Associate, White & Case LLP</div>
                <div className="contact-wrap">
                  <a href="mailto:efat.elsherif@whitecase.com">
                    <img className="email-icon" src={email} alt="email icon" />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/efat-elsherif-05746ab6/">
                  <img className="linkedin-icon" src={linkedin} alt="linkedin logo icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-wrap">
          <div className="section-header">
            <a id="contact-team-link" href="mailto:somaya.amiri@mail.mcgill.ca,laura.andrade2@mail.mcgill.ca,eva.wu@mail.mcgill.ca,wing.wong2@mail.mcgill.ca">
              Contact our team
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
