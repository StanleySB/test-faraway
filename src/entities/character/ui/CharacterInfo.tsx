import React from 'react';
import { Box, Typography, Paper, Divider, Grid } from '@mui/material';
import type { Character } from '../model/types';
import { extractIdFromUrl } from '@shared/lib/utils';
import { useCharacterStore } from '@shared/store/characterStore';

interface CharacterInfoProps {
    character: Character;
}

const InfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <Grid container spacing={2} sx={{ py: 1.5 }}>
        <Grid size={{ xs: 4, sm: 3 }} sx={{ minWidth: 0 }}>
            <Typography variant="body2" color="text.secondary" fontWeight="bold" noWrap>
                {label}
            </Typography>
        </Grid>
        <Grid size={{ xs: 8, sm: 9 }} sx={{ minWidth: 0 }}>
            <Typography variant="body1" noWrap>{value}</Typography>
        </Grid>
    </Grid>
);

export const CharacterInfo: React.FC<CharacterInfoProps> = ({ character }) => {
    const id = extractIdFromUrl(character.url);
    const editedData = useCharacterStore(state => state.editedCharacters[id]);
    const displayData = { ...character, ...editedData };

    return (
        <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, borderRadius: 2 }}>
            <Typography variant="h4" component="h1" gutterBottom fontWeight="bold" color="primary.main" noWrap>
                {displayData.name}
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <InfoRow label="Birth Year" value={displayData.birth_year} />
                <Divider />
                <InfoRow label="Gender" value={displayData.gender} />
                <Divider />
                <InfoRow label="Height" value={`${displayData.height} cm`} />
                <Divider />
                <InfoRow label="Mass" value={`${displayData.mass} kg`} />
                <Divider />
                <InfoRow label="Hair Color" value={displayData.hair_color} />
                <Divider />
                <InfoRow label="Eye Color" value={displayData.eye_color} />
                <Divider />
                <InfoRow label="Skin Color" value={displayData.skin_color} />
            </Box>
        </Paper>
    );
};
