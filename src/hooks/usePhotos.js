import { useEffect, useState } from 'react';
import fetchImages from './../helpers/FetchImages'

let page = 1;

const usePhotos = (defaultSearch) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currSearchTerm, setCurrSearchTerm] = useState(defaultSearch);

  //   useEffect(() => {
  const search = async (searchTerm) => {
    setCurrSearchTerm(searchTerm);
    page = 1;

    try {
      setIsLoading(true);
      const response = await fetchImages(searchTerm, page);
      setImages(response);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };
  //   }, [searchTerm]);

  const loadMoreImages = async () => {
    page += 1;
    const response = await fetchImages(currSearchTerm, page);

    setImages((prevImages) => {
      return [...prevImages, ...response];
    });
  };

  return [images, isLoading, search, loadMoreImages];
};

export default usePhotos;
