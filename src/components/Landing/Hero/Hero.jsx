import React from 'react';
import './Hero.css';
import Iphones from '../../../assets/images/Iphone_Pictures.png';

function Hero() {
  return (
    <div className="hero__container">
      <div className="hero__background_image" />

      <div id="hero__two_columns">
        <div className="hero__column_left">
          <h1>Become the artist we want you to be</h1>
          <p>Take Control Of Your Internet Presence</p>
        </div>
        <div className="hero__column_right">
          <p>All your stats in one place</p>
          <img src={Iphones} alt="#" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
