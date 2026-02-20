import { useQueries, useSuspenseQueries } from '@tanstack/react-query';
import { apiClient } from '@shared/api/base';
import type { Film, Vehicle, Starship } from '@entities/character/model/relationsTypes';

const fetchByUrl = async <T>(url: string): Promise<T> => {
    const { data } = await apiClient.get<T>(url);
    return data;
};

export const useRelatedEntities = <T,>(urls: string[], queryPrefix: string) => {
    return useQueries({
        queries: urls.map((url) => ({
            queryKey: [queryPrefix, url],
            queryFn: () => fetchByUrl<T>(url),
            staleTime: 60 * 60 * 1000,
            enabled: !!url,
        })),
    });
};

export const useRelatedEntitiesSuspense = <T,>(urls: string[], queryPrefix: string) => {
    return useSuspenseQueries({
        queries: urls.map((url) => ({
            queryKey: [queryPrefix, url],
            queryFn: () => fetchByUrl<T>(url),
            staleTime: 60 * 60 * 1000,
        })),
    });
};

export const useRelatedFilms = (urls: string[]) => {
    return useRelatedEntities<Film>(urls, 'film');
};

export const useRelatedVehicles = (urls: string[]) => {
    return useRelatedEntities<Vehicle>(urls, 'vehicle');
};

export const useRelatedStarships = (urls: string[]) => {
    return useRelatedEntities<Starship>(urls, 'starship');
};

export const useRelatedFilmsSuspense = (urls: string[]) => {
    return useRelatedEntitiesSuspense<Film>(urls, 'film');
};

export const useRelatedVehiclesSuspense = (urls: string[]) => {
    return useRelatedEntitiesSuspense<Vehicle>(urls, 'vehicle');
};

export const useRelatedStarshipsSuspense = (urls: string[]) => {
    return useRelatedEntitiesSuspense<Starship>(urls, 'starship');
};
