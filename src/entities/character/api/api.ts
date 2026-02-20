import { apiClient, type ApiResourceList } from '@shared/api/base';
import type { Character } from '../model/types';

export const fetchCharacters = async (page: number = 1, search: string = ''): Promise<ApiResourceList<Character>> => {
    const { data } = await apiClient.get<ApiResourceList<Character>>('/people/', {
        params: {
            page,
            search,
        },
    });
    return data;
};

export const fetchCharacterById = async (id: string): Promise<Character> => {
    const { data } = await apiClient.get<Character>(`/people/${id}/`);
    return data;
};
