import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';

const FooterLinks = () => {
  return (
    <ul className='links'>
      <li>
        <a href='https://github.com/hassanShakur'>
          <FaGithub className='footer-icon' />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/hassan-shakur-4283ab232/'>
          <FaLinkedinIn className='footer-icon' />
        </a>
      </li>
      <li>
        <a href='mailto: hass.shakurhassan@gmail.com'>
          <TfiEmail className='footer-icon' />
        </a>
      </li>
    </ul>
  );
};

export default FooterLinks;
