import { useQuery } from '@tanstack/react-query';
import { fetchPlanets } from '../services/api';

export const usePlanets = () => {
  return useQuery({
    queryKey: ['planets'],
    queryFn: fetchPlanets,
  });
};
