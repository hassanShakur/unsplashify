import React, { Component, useEffect } from 'react';
import usePhotos from './hooks/usePhotos';

import Macy from 'macy';
import macyOptions from './constants/macyOptions';

import ImageList from './components/ImageList';
import { PuffLoader } from 'react-spinners';
import Header from './components/Header';
import Footer from './components/Footer';

import './styles/App.scss';



const App = () => {
  const [images, isLoading, search, loadMoreImages] =
    usePhotos('cars');

  useEffect(() => {
    Macy(macyOptions);
  }, [images]);

  return (
    <React.Fragment>
      <div className='main'>
        <Header onFormSubmit={search} />
        {isLoading ? (
          <PuffLoader
            className='loader'
            color='rgb(238, 0, 79)'
            speedMultiplier='2.4'
          />
        ) : (
          <ImageList
            images={images}
            loadMoreImages={loadMoreImages}
          />
        )}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
