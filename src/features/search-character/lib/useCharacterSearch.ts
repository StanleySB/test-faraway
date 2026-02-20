import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '@shared/lib/hooks/useDebounce';

interface UseCharacterSearchReturn {
    searchValue: string;
    setSearchValue: (value: string) => void;
}

export const useCharacterSearch = (delayMs: number = 500): UseCharacterSearchReturn => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialSearch = searchParams.get('search') || '';
    const [localSearch, setLocalSearch] = useState<string>(initialSearch);

    const debouncedSearch = useDebounce(localSearch, delayMs);

    useEffect(() => {
        if (debouncedSearch !== (searchParams.get('search') || '')) {
            const currentSearchParams = new URLSearchParams(searchParams);
            if (debouncedSearch) {
                currentSearchParams.set('search', debouncedSearch);
                currentSearchParams.set('page', '1');
            } else {
                currentSearchParams.delete('search');
            }
            setSearchParams(currentSearchParams, { replace: true });
        }
    }, [debouncedSearch, searchParams, setSearchParams]);

    return {
        searchValue: localSearch,
        setSearchValue: setLocalSearch,
    };
};
