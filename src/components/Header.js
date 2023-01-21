import React from 'react';
import InputForm from './InputForm';
import Logo from './Logo';

const Header = ({ onFormSubmit }) => {
  return (
    <div className='header'>
      <Logo />
      <InputForm onFormSubmit={onFormSubmit} />
    </div>
  );
};

export default Header;
