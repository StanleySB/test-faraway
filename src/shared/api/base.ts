import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'https://swapi.py4e.com/api',
});

apiClient.interceptors.request.use((config) => {
    if (config.url && config.url.startsWith('http://')) {
        config.url = config.url.replace('http://', 'https://');
    }
    return config;
});

export interface ApiResourceList<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}
