import axios from 'axios';

const API_URL = `https://rickandmortyapi.com/api/location/`;
const getLocations = async (pageNumber) => {
  const response = await axios.get(`${API_URL}?page=${pageNumber}`);
  return response.data;
};

const locationService = { getLocations };
export default locationService;
