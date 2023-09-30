/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import '../App.css';
import maple from '../assets/maple.svg';

function Header() {
  return (
    <div id="header-wrap">
      <img id="header-icon" src={maple} alt="Canadian red maple leaf icon" />
      McGill University | 2024 Willem C. Vis Moot
    </div>
  );
}

export default Header;
