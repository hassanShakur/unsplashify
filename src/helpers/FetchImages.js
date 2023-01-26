import axiosBase from '../api/axiosBase';

const fetchImages = async (searchTerm, pageNum) => {
  const response = await axiosBase.get('/search/photos', {
    params: {
      query: searchTerm.toLowerCase(),
      per_page: 30,
      page: pageNum,
    },
  });
  return response.data.results;
};

export default fetchImages;
