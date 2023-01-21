import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';

const FooterLinks = () => {
  return (
    <ul className='links'>
      <li>
        <a href='https://github.com/hassanShakur'>
          <FaGithub fontSize='2.5vmin' color='#fff' />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/hassan-shakur-4283ab232/'>
          <FaLinkedinIn fontSize='2.5vmin' color='#fff' />
        </a>
      </li>
      <li>
        <a href='mailto: hass.shakurhassan@gmail.com'>
          <TfiEmail fontSize='2.5vmin' color='#fff' />
        </a>
      </li>
    </ul>
  );
};

export default FooterLinks;
