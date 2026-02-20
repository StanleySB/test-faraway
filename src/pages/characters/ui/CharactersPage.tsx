import { Container, Typography, Box } from '@mui/material';
import { CharacterList } from '@widgets/character-list/ui/CharacterList';
import { SearchCharacter } from '@features/search-character/ui/SearchCharacter';
import { FadeIn } from '@shared/ui/animations/FadeIn';
import { Suspense } from 'react';
import { ErrorBoundary } from '@app/providers/ErrorBoundary';
import { CharacterListSkeleton } from '@widgets/character-list/ui/CharacterListSkeleton';

export const CharactersPage = () => {
    return (
        <FadeIn>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
                        Star Wars Characters
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        Explore the universe of Star Wars characters. Use the search to find your favorites.
                    </Typography>

                    <SearchCharacter />
                </Box>

                <ErrorBoundary>
                    <Suspense fallback={<CharacterListSkeleton />}>
                        <CharacterList />
                    </Suspense>
                </ErrorBoundary>
            </Container>
        </FadeIn>
    );
};
