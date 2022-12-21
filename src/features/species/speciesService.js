import axios from 'axios';

const HUMAN_API = `https://rickandmortyapi.com/api/character/?species=human`;

const ALIEN_API = `https://rickandmortyapi.com/api/character/?species=alien`;

const HUMANOID_API = `https://rickandmortyapi.com/api/character/?species=humanoid`;

const ANIMAL_API = `https://rickandmortyapi.com/api/character/?species=animal`;

const ROBOT_API = `https://rickandmortyapi.com/api/character/?species=robot`;

const CRONENBERG_API = `https://rickandmortyapi.com/api/character/?species=cronenberg`;

const MYTHOLOG_API = `https://rickandmortyapi.com/api/character/?species=mytholog`;

const DISEASE_API = `https://rickandmortyapi.com/api/character/?species=disease`;

const POOPYBUTTHOLE_API = `https://rickandmortyapi.com/api/character/?species=poopybutthole`;

const UNKNOWN_API = `https://rickandmortyapi.com/api/character/?species=unknown`;

const getHuman = async () => {
  const response = await axios.get(HUMAN_API);
  return response.data;
};

const getAlien = async () => {
  const response = await axios.get(ALIEN_API);
  return response.data;
};

const getHumanoid = async () => {
  const response = await axios.get(HUMANOID_API);
  return response.data;
};

const getAnimal = async () => {
  const response = await axios.get(ANIMAL_API);
  return response.data;
};

const getRobot = async () => {
  const response = await axios.get(ROBOT_API);
  return response.data;
};

const getCronenberg = async () => {
  const response = await axios.get(CRONENBERG_API);
  return response.data;
};

const getMytholog = async () => {
  const response = await axios.get(MYTHOLOG_API);
  return response.data;
};

const getDisease = async () => {
  const response = await axios.get(DISEASE_API);
  return response.data;
};

const getPoopybutthole = async () => {
  const response = await axios.get(POOPYBUTTHOLE_API);
  return response.data;
};

const getUnknown = async () => {
  const response = await axios.get(UNKNOWN_API);
  return response.data;
};

const speciesService = {
  getHuman,
  getAlien,
  getHumanoid,
  getAnimal,
  getRobot,
  getCronenberg,
  getMytholog,
  getDisease,
  getPoopybutthole,
  getUnknown,
};
export default speciesService;
