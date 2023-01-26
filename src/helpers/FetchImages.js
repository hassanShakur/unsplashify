import axiosBase from '../api/axiosBase';

const fetchImages = async (searchTerm) => {
  const response = await axiosBase.get('/search/photos', {
    params: {
      query: searchTerm.toLowerCase(),
      per_page: 20,
    },
  });
  return response;
};

export default fetchImages;
