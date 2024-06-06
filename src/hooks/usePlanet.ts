import { useQuery } from '@tanstack/react-query';
import { fetchPlanetByName } from '../services/api';

export const usePlanet = (name: string) => {
  return useQuery(['planet', name], () => fetchPlanetByName(name), {
    enabled: !!name,
    staleTime: 60000, // 1 minute
  });
};
