import React, { useEffect, useRef, useState } from 'react';
import Logo from './Logo';

const InputForm = ({ onFormSubmit }) => {
  const [inputText, setInputText] = useState('cars');
  const inputRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(inputText);
    inputRef.current.blur();
  };

  useEffect(() => {
    onFormSubmit('cars');
  }, []);

  return (
    <form className='search-form' onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type='text'
        value={inputText}
        placeholder='Search'
        className='search-input'
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type='submit' className='submit-btn'>
        <Logo />
      </button>
    </form>
  );
};

export default InputForm;
