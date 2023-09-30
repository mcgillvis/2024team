import React from 'react';
import '../App.css';
import logo from '../assets/linkedin-icon.svg';

function Name(name, linkedin) {
  return (
    <div className="name-flex">
      {name}
      <a href={linkedin}>
        <img src={logo} alt="LinkedIn logo"/>
      </a>
    </div>
  );
}

export default Name;
