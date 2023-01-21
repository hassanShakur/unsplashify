import { useState } from 'react';
import './App.css';
import ImageList from './components/ImageList';
import InputForm from './components/InputForm';
import fetchImages from './helpers/FetchImages';
import { ClockLoader } from 'react-spinners';

function App() {
  const [resultImages, setResultImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (keywords) => {
    setIsLoading(true);
    const { data } = await fetchImages(keywords);
    setResultImages(data.results);
    setIsLoading(false);
  };

  if (isLoading) return;

  return (
    <div className=''>
      <InputForm onFormSubmit={handleFormSubmit} />
      {isLoading ? (
        <ClockLoader />
      ) : (
        <ImageList images={resultImages} />
      )}
    </div>
  );
}

export default App;
