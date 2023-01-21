import React from 'react';
import Logo from './Logo';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <footer>
      <div className='footer-logo'>
        <Logo />
        <h3>Unsplashify</h3>
      </div>
      <FooterLinks />
    </footer>
  );
};

export default Footer;
