import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const AppQueryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                staleTime: 5 * 60 * 1000,
            },
        },
    }));

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
