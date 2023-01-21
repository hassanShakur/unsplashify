import axios from 'axios';

const fetchImages = async (searchTerm) => {
  const response = await axios.get(
    'https://api.unsplash.com/search/photos',
    {
      params: {
        query: searchTerm,
      },
      headers: {
        Authorization:
          'Client-ID eOe-OKFm1343qx47UHIIwWwYZb4-EFWipOR6rsqKqak',
      },
    }
  );
  //   console.log(response.data.results);
  return response;
};

export default fetchImages;
