import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

export const fetchPlanetByName = async (name: string) => {
  const response = await api.get(`planets/?search=${name}`);
  if (response.data.results.length === 0) {
    throw new Error('Planet not found');
  }
  return response.data.results[0];
};
