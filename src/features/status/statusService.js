import axios from 'axios';

const ALIVE_API = `https://rickandmortyapi.com/api/character/?status=alive`;
const DEAD_API = `https://rickandmortyapi.com/api/character/?status=dead`;
const UNKNOWN_API = `https://rickandmortyapi.com/api/character/?status=unknown`;

const getAlive = async () => {
  const response = await axios.get(ALIVE_API);
  return response.data;
};
const getDead = async () => {
  const response = await axios.get(DEAD_API);
  return response.data;
};
const getUnknownStatus = async () => {
  const response = await axios.get(UNKNOWN_API);
  return response.data;
};

const statusService = {
  getAlive,
  getDead,
  getUnknownStatus,
};
export default statusService;
