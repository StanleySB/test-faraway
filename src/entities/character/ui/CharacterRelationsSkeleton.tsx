import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider, Skeleton } from '@mui/material';

interface CharacterRelationsSkeletonProps {
    filmsCount: number;
    vehiclesCount: number;
    starshipsCount: number;
}

export const CharacterRelationsSkeleton: React.FC<CharacterRelationsSkeletonProps> = ({ filmsCount, vehiclesCount, starshipsCount }) => {
    const renderSkeletonList = (title: string, count: number) => {
        if (count === 0) return null;

        return (
            <Box sx={{ mt: 3 }}>
                <Typography variant="h6" color="primary.main" gutterBottom>
                    {title}
                </Typography>
                <List dense sx={{ bgcolor: 'background.paper', borderRadius: 1 }}>
                    {Array.from(new Array(count)).map((_, i) => (
                        <React.Fragment key={i}>
                            <ListItem>
                                <ListItemText primary={
                                    <Typography variant="body2">
                                        <Skeleton width={`${Math.random() * 30 + 40}%`} />
                                    </Typography>
                                } />
                            </ListItem>
                            {i < count - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </List>
            </Box>
        );
    };

    return (
        <Box sx={{ mt: 4 }}>
            {renderSkeletonList('Movies', filmsCount)}
            {renderSkeletonList('Vehicles', vehiclesCount)}
            {renderSkeletonList('Starships', starshipsCount)}
        </Box>
    );
};
