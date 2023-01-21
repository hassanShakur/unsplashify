import React, { useRef, useState } from 'react';
import { useEffect } from 'react';

const ImageCard = (props) => {
  const { urls, description } = props.image;
  const [imageSpan, setImageSpan] = useState(0);

  const setGridSpan = () => {
    const height = imageRef.current.clientHeight;
    setImageSpan(Math.ceil(height / 20) + 1);
  };

  const imageRef = useRef();

  useEffect(() => {
    imageRef.current.addEventListener('load', setGridSpan);
  }, [imageRef]);

  return (
    <div
      className='image-div'
      style={{ gridRowEnd: `span ${imageSpan}` }}
    >
      <img
        ref={imageRef}
        className='image'
        src={urls.regular}
        alt={description}
      />
    </div>
  );
};

export default ImageCard;
