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
    console.log(resultImages);
  };
  return (
    <div className=''>
      <ImageList />
      <p>found {resultImages.length} images</p>
      <InputForm onFormSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
