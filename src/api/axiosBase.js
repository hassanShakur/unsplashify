import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID eOe-OKFm1343qx47UHIIwWwYZb4-EFWipOR6rsqKqak',
  },
});
