import React from 'react';

const ImageCard = (props) => {
  const { urls, description } = props.image;

  return (
    <div className='image-div'>
      <img
        className='image'
        src={urls.regular}
        alt={description}
        placeholder={urls.small}
      />
    </div>
  );
};

export default ImageCard;
