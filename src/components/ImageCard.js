import React, { useRef, useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageCard = (props) => {
  const { urls, description } = props.image;
  const [imageSpan, setImageSpan] = useState(0);
  // console.log(props);

  // const setGridSpan = () => {
  //   const height = imageRef.current.clientHeight;
  //   setImageSpan(Math.ceil(height / 20) + 1);
  // };

  const imageRef = useRef();

  // useEffect(() => {
  //   imageRef.current.addEventListener('load', setGridSpan);
  // }, [imageRef]);

  return (
    <div
      className='image-div'
      style={{ gridRowEnd: `span ${imageSpan}` }}
    >
      <img
        ref={imageRef}
        // effect='blur'
        // placeholderSrc={urls.small}
        className='image'
        src={urls.regular}
        alt={description}
      />
    </div>
  );
};

export default ImageCard;
