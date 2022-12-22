import React from 'react';
import './Logo.css';
import Tilt from 'react-parallax-tilt';
import logo from './logo.png';

const Logo = () => {
  return (
    <Tilt
      className="tilt br2 shadow-5 h3 w3 flex items-center justify-center"
      tiltMaxAngleX={50}
      tiltMaxAngleY={50}>
      <img src={logo} alt="Logo" />
    </Tilt>
  );
};

export default Logo;
