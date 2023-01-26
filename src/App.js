import React, { useEffect, useState } from 'react';
import Macy from 'macy';
import './styles/App.scss';
import ImageList from './components/ImageList';
import fetchImages from './helpers/FetchImages';
import { PuffLoader } from 'react-spinners';
import Header from './components/Header';
import Footer from './components/Footer';

let page = 1;

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
  const [currSearchTerm, setCurrSearchTerm] = useState('cars');

  useEffect(() => {
    Macy(macyOptions);
  }, [resultImages]);

  const handleFormSubmit = async (searchTerm) => {
    setCurrSearchTerm(searchTerm);
    page = 1;

    try {
      setIsLoading(true);
      const images = await fetchImages(searchTerm, page);
      setResultImages(images);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  const loadMoreImages = async () => {
    page += 1;
    const images = await fetchImages(currSearchTerm, page);

    setResultImages((prevImages) => {
      return [...prevImages, ...images];
    });
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
          <ImageList
            images={resultImages}
            loadMoreImages={loadMoreImages}
          />
        )}
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
