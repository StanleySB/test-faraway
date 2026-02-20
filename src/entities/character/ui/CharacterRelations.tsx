import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import { useRelatedFilmsSuspense, useRelatedVehiclesSuspense, useRelatedStarshipsSuspense } from '@shared/api/swapi/extraQueries';

interface CharacterRelationsProps {
    films: string[];
    vehicles: string[];
    starships: string[];
}

export const CharacterRelations: React.FC<CharacterRelationsProps> = ({ films, vehicles, starships }) => {
    const filmQueries = useRelatedFilmsSuspense(films);
    const vehicleQueries = useRelatedVehiclesSuspense(vehicles);
    const starshipQueries = useRelatedStarshipsSuspense(starships);

    const renderList = <T,>(title: string, queryResults: { data: T }[], renderItem: (data: T) => string) => {
        if (queryResults.length === 0) return null;

        return (
            <Box sx={{ mt: 3 }}>
                <Typography variant="h6" color="primary.main" gutterBottom>
                    {title}
                </Typography>
                <List dense sx={{ bgcolor: 'background.paper', borderRadius: 1 }}>
                    {queryResults.map((q, i) => (
                        <React.Fragment key={i}>
                            <ListItem>
                                <ListItemText primary={renderItem(q.data)} />
                            </ListItem>
                            {i < queryResults.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </List>
            </Box>
        );
    };

    return (
        <Box sx={{ mt: 4 }}>
            {renderList('Movies', filmQueries, (f) => `${f.title} (Ep. ${f.episode_id}) - ${f.release_date}`)}
            {renderList('Vehicles', vehicleQueries, (v) => `${v.name} (${v.model})`)}
            {renderList('Starships', starshipQueries, (s) => `${s.name} (${s.starship_class})`)}
        </Box>
    );
};
