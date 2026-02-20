import { fetchCharacters, fetchCharacterById } from './api';
import { apiClient } from '@shared/api/base';
import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('@shared/api/base', () => ({
    apiClient: {
        get: vi.fn(),
    },
}));

describe('Character API', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('fetchCharacters calls people endpoint with correct params', async () => {
        const mockData = { data: { count: 1, results: [{ name: 'Luke' }] } };
        vi.mocked(apiClient.get).mockResolvedValue(mockData as never);

        const result = await fetchCharacters(2, 'luke');
        expect(apiClient.get).toHaveBeenCalledWith('/people/', {
            params: { page: 2, search: 'luke' },
        });
        expect(result).toEqual(mockData.data);
    });

    it('fetchCharacterById calls people endpoint with correct id', async () => {
        const mockData = { data: { name: 'Luke Skywalker' } };
        vi.mocked(apiClient.get).mockResolvedValue(mockData as never);

        const result = await fetchCharacterById('1');
        expect(apiClient.get).toHaveBeenCalledWith('/people/1/');
        expect(result).toEqual(mockData.data);
    });
});
