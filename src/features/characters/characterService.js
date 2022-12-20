import axios from 'axios';

const API_URL = `https://rickandmortyapi.com/api/character/?page=`;

const getCharacters = async (pageNumber) => {
  const response = await axios.get(API_URL + pageNumber);
  return response.data;
};

const characterService = { getCharacters };
export default characterService;
