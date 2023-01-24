import { useState } from 'react';
import './App.css';
import ImageList from './components/ImageList';
import fetchImages from './helpers/FetchImages';
import { PuffLoader } from 'react-spinners';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [resultImages, setResultImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (keywords) => {
    setIsLoading(true);
    const { data } = await fetchImages(keywords);
    setResultImages(data.results);
    setIsLoading(false);
  };

  return (
    <div className='main'>
      <Header onFormSubmit={handleFormSubmit} />
      {isLoading ? (
        <PuffLoader
          className='loader'
          color='rgb(238, 0, 79)'
          speedMultiplier='2.4'
        />
      ) : (
        <ImageList images={resultImages} />
      )}
      <Footer />
    </div>
  );
}

export default App;
