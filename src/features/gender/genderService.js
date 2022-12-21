import axios from 'axios';

const MALE_API = `https://rickandmortyapi.com/api/character/?gender=male`;
const FEMALE_API = `https://rickandmortyapi.com/api/character/?gender=female`;
const UNKNOWN_API = `https://rickandmortyapi.com/api/character/?gender=unknown`;
const GENDERLESS_API = `https://rickandmortyapi.com/api/character/?gender=genderLess`;

const getAllMales = async () => {
  const response = await axios.get(MALE_API);
  return response.data;
};
const getAllFemales = async () => {
  const response = await axios.get(FEMALE_API);
  return response.data;
};
const getAllUnknown = async () => {
  const response = await axios.get(UNKNOWN_API);
  return response.data;
};
const getAllGenderless = async () => {
  const response = await axios.get(GENDERLESS_API);
  return response.data;
};

const genderService = {
  getAllMales,
  getAllFemales,
  getAllGenderless,
  getAllUnknown,
};
export default genderService;
