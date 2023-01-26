import React from 'react';

const ImageCard = (props) => {
  const { urls, description } = props.image;
  // console.log(props.image);

  return (
    <div className='image-div'>
      <img
        color={props.image.color}
        className='image'
        src={urls.thumb}
        data-src={urls.small}
        alt={description}
      />
      <div className="image-overlay"></div>
    </div>
  );
};

export default ImageCard;
