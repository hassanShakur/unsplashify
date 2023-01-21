import React from 'react';

const ImageList = ({ images }) => {
  const imagesHtml = images.map((image) => {
    const {id, urls, description} = image;
    return <img key={id} src={urls.regular} alt={description} />;
  });

  return <div>{imagesHtml}</div>;
};

export default ImageList;
