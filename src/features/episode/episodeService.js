import axios from 'axios';

const API_URL = `https://rickandmortyapi.com/api/episode/`;
const getEpisodes = async (pageNumber) => {
  const response = await axios.get(`${API_URL}?page=${pageNumber}`);
  return response.data;
};

const episodeService = { getEpisodes };
export default episodeService;
