import React, { useState } from 'react';

const InputForm = ({ onFormSubmit }) => {
  const [inputSearch, setInputSearch] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(inputSearch);
    setInputSearch('');
  };
  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <input
        type='text'
        value={inputSearch}
        placeholder='Search'
        className='search-input'
        onChange={(e) => setInputSearch(e.target.value)}
      />
    </form>
  );
};

export default InputForm;
