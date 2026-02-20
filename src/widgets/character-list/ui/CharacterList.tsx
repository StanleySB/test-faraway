import { Grid, Box, Typography } from '@mui/material';
import { FadeIn } from '@shared/ui/animations/FadeIn';
import { CharacterCard } from '@entities/character/ui/CharacterCard';
import { useCharactersQuery } from '@entities/character/api/queries';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from '@features/pagination/ui/Pagination';


export const CharacterList = () => {
    const [searchParams] = useSearchParams();
    const page = parseInt(searchParams.get('page') || '1', 10);
    const search = searchParams.get('search') || '';

    const { data } = useCharactersQuery(page, search);

    const renderContent = () => {

        if (!data?.results || data.results.length === 0) {
            return (
                <Box sx={{ py: 10, textAlign: 'center', bgcolor: 'background.paper', borderRadius: 2 }}>
                    <Typography variant="h5" color="text.secondary" gutterBottom>
                        No characters found
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        We couldn't find any characters matching your criteria in the archive.
                    </Typography>
                </Box>
            );
        }

        return (
            <FadeIn key="content" duration={400}>
                <Box>
                    <Grid container spacing={3} columns={{ xs: 1, sm: 2, md: 5 }}>
                        {data.results.map((character) => (
                            <Grid size={1} key={character.url}>
                                <CharacterCard character={character} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </FadeIn>
        );
    };

    return (
        <Box>
            {renderContent()}

            {data && data.count > 0 && (
                <Pagination totalCount={data.count} pageSize={10} />
            )}
        </Box>
    );
};
