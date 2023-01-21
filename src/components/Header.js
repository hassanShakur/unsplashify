import React from 'react';
import InputForm from './InputForm';

const Header = ({ onFormSubmit }) => {
  return (
    <>
      <div className='header'>
        <h2 className='title'>unsplashify</h2>
        <InputForm onFormSubmit={onFormSubmit} />
      </div>
    </>
  );
};

export default Header;
