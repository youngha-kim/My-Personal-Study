import type { Treatment } from '../../../../../shared/types';
import { axiosInstance } from '../../../axiosInstance';
import { queryKeys } from '../../../react-query/constants';
import { useCustomToast } from '../../app/hooks/useCustomToast';
import { useQuery, useQueryClient } from 'react-query';
import { queryClient } from 'react-query/queryClient';

// for when we need a query function for useQuery
async function getTreatments(): Promise<Treatment[]> {
  const { data } = await axiosInstance.get('/treatments');
  return data;
}

export function useTreatments(): Treatment[] {
  // const toast = useCustomToast();
  // TODO: get dat  from server via useQuery
  const fallback = [];
  const { data = fallback } = useQuery(queryKeys.treatments, getTreatments, {
    staleTime: 600000, // 10 minutes
    cacheTime: 900000, // 15 minuites(doesn't make sense for staletime to exceed cachetime),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
  return data;
}

export function usePrefetchTreatments(): void {
  const queryClient = useQueryClient();
  queryClient.prefetchQuery(queryKeys.treatments, getTreatments, {
    staleTime: 600000, 
    cacheTime: 900000,
  });
}
// {
// onError: (error) => {
//   const title =
//     error instanceof Error
//       ? error.message
//       : 'error connecting to the server';
//   toast({ title, status: 'error' });
// },
//}
