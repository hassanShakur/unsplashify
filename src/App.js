import React, { useEffect, useState } from 'react';
import Macy from 'macy';
import './App.css';
import ImageList from './components/ImageList';
import fetchImages from './helpers/FetchImages';
import { PuffLoader } from 'react-spinners';
import Header from './components/Header';
import Footer from './components/Footer';

const macyOptions = {
  container: '#container',
  margin: 24,
  columns: 4,
  breakAt: {
    1800: 5,
    1200: 4,
    1000: 3,
    650: {
      margin: 30,
      columns: 2,
    },
    400: {
      margin: 18,
    },
    300: 1,
  },
};

function App() {
  const [resultImages, setResultImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Macy(macyOptions);
  }, [resultImages]);

  const handleFormSubmit = async (keywords) => {
    setIsLoading(true);
    const { data } = await fetchImages(keywords);
    setResultImages(data.results);
    setIsLoading(false);
  };

  return (
    <React.Fragment>
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
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
