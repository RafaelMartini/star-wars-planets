import { useQuery } from '@tanstack/react-query';
import { fetchPlanetByName, fetchDetails } from '../services/api';

export const usePlanetByName = (name: string) => {
  return useQuery({
    queryKey: ['planet', name],
    queryFn: async () => {
      const planet = await fetchPlanetByName(name);

      const filmPromises = planet.films.map((url: string) => fetchDetails(url));
      const residentPromises = planet.residents.map((url: string) => fetchDetails(url));

      const films = await Promise.all(filmPromises);
      const residents = await Promise.all(residentPromises);

      return {
        ...planet,
        films,
        residents,
      };
    },
    enabled: !!name,
  });
};
