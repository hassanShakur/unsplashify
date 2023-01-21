import React, { useState } from 'react';

const InputForm = ({ onFormSubmit }) => {
  const [inputText, setInputText] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(inputText);
    setInputText('');
  };
  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <input
        type='text'
        value={inputText}
        placeholder='Search'
        className='search-input'
        onChange={(e) => setInputText(e.target.value)}
      />
    </form>
  );
};

export default InputForm;
