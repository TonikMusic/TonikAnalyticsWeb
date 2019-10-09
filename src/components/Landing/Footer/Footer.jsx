import React from 'react';
import './Footer.css';
import Logo from '../../../assets/logos/FullNoColor.png';
import IOSDownload from '../../../assets/images/DownloadOnIOS.png';

function Footer() {
  return (
    <div className="footer__container">
      <div id="footer__two_columns">
        <div className="footer__left_column">
          <img src={Logo} alt="#" />
          <p>&copy; 2019 Tonik</p>
        </div>
        <div className="footer__right_column">
          <p>Try Our Mobile App</p>
          <img src={IOSDownload} alt="#" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
