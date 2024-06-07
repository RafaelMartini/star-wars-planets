import axios from 'axios';

const API_URL = 'https://swapi.dev/api/';

export const fetchPlanets = async () => {
  const response = await axios.get(`${API_URL}planets/`);
  return response.data;
};

export const fetchPlanetByName = async (name: string) => {
  const response = await axios.get(`${API_URL}planets/?search=${name}`);
  return response.data.results[0];
};

export const fetchDetails = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

