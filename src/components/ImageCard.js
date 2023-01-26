import React from 'react';

const ImageCard = ({ image }) => {
  const { urls, description } = image;
  // console.log(image);

  return (
    <div className='image-div'>
      <img
        className='image'
        src={urls.thumb}
        data-src={urls.regular}
        alt={description}
      />
      <div
        className='image-overlay'
        style={{
          backgroundColor: `${image.color}`,
        }}
      ></div>
    </div>
  );
};

export default ImageCard;
