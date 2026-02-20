import { useSuspenseQuery, type UseSuspenseQueryResult } from '@tanstack/react-query';
import { fetchCharacters, fetchCharacterById } from './api';
import type { ApiResourceList } from '@shared/api/base';
import type { Character } from '../model/types';

export const useCharactersQuery = (page: number, search: string): UseSuspenseQueryResult<ApiResourceList<Character>> => {
    return useSuspenseQuery({
        queryKey: ['characters', page, search],
        queryFn: () => fetchCharacters(page, search),
        staleTime: 5 * 60 * 1000,
    });
};

export const useCharacterQuery = (id: string): UseSuspenseQueryResult<Character> => {
    return useSuspenseQuery({
        queryKey: ['character', id],
        queryFn: () => fetchCharacterById(id),
        staleTime: 5 * 60 * 1000,
    });
};
