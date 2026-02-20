import React from 'react';
import { Pagination as MuiPagination, Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

interface PaginationProps {
    totalCount: number;
    pageSize?: number;
}

export const Pagination: React.FC<PaginationProps> = ({ totalCount, pageSize = 10 }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = parseInt(searchParams.get('page') || '1', 10);

    const totalPages = Math.ceil(totalCount / pageSize);

    const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        const currentSearchParams = new URLSearchParams(searchParams);
        currentSearchParams.set('page', value.toString());
        setSearchParams(currentSearchParams);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (totalPages <= 1) return null;

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 4 }}>
            <MuiPagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                size="large"
            />
        </Box>
    );
};
