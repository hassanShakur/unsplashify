import { useState } from 'react';
import './App.css';
import ImageList from './components/ImageList';
import InputForm from './components/InputForm';
import fetchImages from './helpers/FetchImages';

function App() {
  const [resultImages, setResultImages] = useState([]);

  const handleFormSubmit = async (keywords) => {
    const { data } = await fetchImages(keywords);
    setResultImages(data.results);
  };
  return (
    <div className=''>
      <InputForm onFormSubmit={handleFormSubmit} />
      <ImageList images={resultImages} />
    </div>
  );
}

export default App;
