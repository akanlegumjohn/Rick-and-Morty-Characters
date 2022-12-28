import axios from 'axios';

const API_URL = `https://rickandmortyapi.com/api/character/`;
const getCharacters = async (
  pageNumber,
  searchedName,
  status,
  gender,
  species
) => {
  const response = await axios.get(
    `${API_URL}?page=${pageNumber}&name=${searchedName}&status=${species}&species=${status}&gender=${gender}`
  );
  return response.data;
};

const characterService = { getCharacters };
export default characterService;
