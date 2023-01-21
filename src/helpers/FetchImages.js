import axiosBase from '../api/axiosBase';

const fetchImages = async (searchTerm) => {
  const response = await axiosBase.get('/search/photos', {
    params: {
      query: searchTerm,
    },
  });
  return response;
};

export default fetchImages;
