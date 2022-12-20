import axios from 'axios';

const API_URL = `https://rickandmortyapi.com/api/character/`;

const getCharacters = async (pageNumber, searchedName) => {
  const response = await axios.get(
    `${API_URL}?page=${pageNumber}&name=${searchedName}`
  );
  return response.data;
};

const characterService = { getCharacters };
export default characterService;
