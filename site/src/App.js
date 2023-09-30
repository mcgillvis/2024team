import './App.css';
import React, { useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Name from './components/Name';
import Eva from './assets/eva-headshot.jpeg';
import Wing from './assets/wing-headshot.jpeg';
import Laura from './assets/laura-headshot.jpeg';
import Eric from './assets/eric-headshot.jpeg';
import Dina from './assets/dina-headshot.jpeg';
import Somaya from './assets/somaya-headshot.jpeg'
;
import linkedin from './assets/linkedin-icon.svg';
import email from './assets/email-icon (4).svg';

function App() {
  useEffect(() => {
    document.title = 'McGill team';
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
                  <img className="email-icon" src={email} alt="email icon" />
                  <img className="linkedin-icon" src={linkedin} alt="email icon" />
                </div>
              </div>
              <div className="profile-flex">
                <img className="headshot" src={Laura} alt="Laura Andrade headshot"/>
                <div className="profile-name">Laura Andrade</div>
                <div className="profile-subheader">BCL/JD Candidate</div>
                <div className="contact-wrap">
                  <img className="email-icon" src={email} alt="email icon" />
                  <img className="linkedin-icon" src={linkedin} alt="email icon" />
                </div>
              </div>
            </div>
            <div className="gallery-row">
              <div className="profile-flex">
                <img className="headshot" src={Wing} alt="Wing Wong headshot"/>
                <div className="profile-name">Wing Wong</div>
                <div className="profile-subheader">BCL/JD Candidate</div>
                <div className="contact-wrap">
                  <img className="email-icon" src={email} alt="email icon" />
                  <img className="linkedin-icon" src={linkedin} alt="email icon" />
                </div>
              </div>
              <div className="profile-flex">
                <img className="headshot" src={Eva} alt="Eva Wu headshot"/>
                <div className="profile-name">Eva Wu</div>
                <div className="profile-subheader">BCL/JD Candidate</div>
                <div className="contact-wrap">
                  <img className="email-icon" src={email} alt="email icon" />
                  <img className="linkedin-icon" src={linkedin} alt="email icon" />
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
              </div>
              <div className="profile-flex">
                <img className="headshot" src={Dina} alt="Dina Prokic headshot"/>
                <div className="profile-name">Dina Prokic</div>
                <div className="profile-subheader">Associate, Woods LLP</div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-wrap">
          <div className="section-header">Thank you to our sponsors</div>
          <div className="spacer">Coming soon! Contact our team to sponsor us.</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
