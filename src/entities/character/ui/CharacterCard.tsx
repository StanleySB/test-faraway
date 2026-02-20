import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material';
import type { Character } from '../model/types';
import { extractIdFromUrl } from '@shared/lib/utils';
import { useCharacterStore } from '@shared/store/characterStore';
import { Link } from 'react-router-dom';
import placeholderImg from './placeholder.jpg';

interface CharacterCardProps {
    character: Character;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
    const id = extractIdFromUrl(character.url);
    const editedData = useCharacterStore(state => state.editedCharacters[id]);

    const displayData = { ...character, ...editedData };

    return (
        <Card
            component={Link}
            to={`/character/${id}`}
            sx={{
                textDecoration: 'none',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <CardMedia
                component="img"
                height="200"
                image={placeholderImg}
                alt={displayData.name}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }} noWrap>
                    {displayData.name}
                </Typography>

                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'nowrap', mb: 2, overflow: 'hidden' }}>
                    {displayData.gender !== 'n/a' && (
                        <Chip label={displayData.gender} size="small" variant="outlined" sx={{ maxWidth: '100%', '& .MuiChip-label': { display: 'block', overflow: 'hidden', textOverflow: 'ellipsis' } }} />
                    )}
                    <Chip label={`Birth: ${displayData.birth_year}`} size="small" sx={{ maxWidth: '100%', '& .MuiChip-label': { display: 'block', overflow: 'hidden', textOverflow: 'ellipsis' } }} />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, overflow: 'hidden' }}>
                    <Typography variant="body2" color="text.secondary" noWrap>
                        <strong>Height:</strong> {displayData.height} cm
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                        <strong>Mass:</strong> {displayData.mass} kg
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};
