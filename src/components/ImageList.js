import React, { useEffect } from 'react';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  const imagesHtml = images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        // console.log(entry);

        const image = entry.target;
        const imageOverlay = image.nextElementSibling;

        if (entry.isIntersecting) {
          image.src = image.dataset.src;
          imageOverlay.style.opacity = `0`;
          // imageOverlay.style = `z-index: -10`;
        }

      });
    };
    // window.addEventListener('load', () => {
    const images = document.querySelectorAll('.image');
    const imageObserver = new IntersectionObserver(callback, options);

    images.forEach((image) => {
      imageObserver.observe(image);
    });
    // });
  }, [images]);

  return (
    <>
      <div className='container' id='container'>
        {imagesHtml}
      </div>
    </>
  );
};

export default ImageList;
