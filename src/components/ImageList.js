import React from 'react';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  const imagesHtml = images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return (
    <>
      <div className='container' id='container'>
        {imagesHtml}
      </div>
    </>
  );
};

export default ImageList;
