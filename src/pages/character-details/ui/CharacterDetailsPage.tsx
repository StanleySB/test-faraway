import { Suspense, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import { useCharacterQuery } from '@entities/character/api/queries';
import { CharacterInfo } from '@entities/character/ui/CharacterInfo';
import { CharacterRelations } from '@entities/character/ui/CharacterRelations';
import { EditCharacterForm } from '@features/edit-character/ui/EditCharacterForm';
import { CharacterRelationsSkeleton } from '@entities/character/ui/CharacterRelationsSkeleton';
import { CharacterDetailsSkeleton } from './CharacterDetailsSkeleton';
import { FadeIn } from '@shared/ui/animations/FadeIn';

interface CharacterDetailsContentProps {
    id: string;
    isEditing: boolean;
    setIsEditing: (val: boolean) => void;
}

const CharacterDetailsContent: React.FC<CharacterDetailsContentProps> = ({ id, isEditing, setIsEditing }) => {
    const { data: character } = useCharacterQuery(id);

    return (
        <FadeIn key="details-content" slide={false} duration={400}>
            {isEditing ? (
                <EditCharacterForm key={character.url} character={character} onClose={() => setIsEditing(false)} />
            ) : (
                <>
                    <CharacterInfo character={character} />
                    <Suspense fallback={
                        <CharacterRelationsSkeleton
                            filmsCount={character.films.length}
                            vehiclesCount={character.vehicles.length}
                            starshipsCount={character.starships.length}
                        />
                    }>
                        <CharacterRelations
                            films={character.films}
                            vehicles={character.vehicles}
                            starships={character.starships}
                        />
                    </Suspense>
                </>
            )}
        </FadeIn>
    );
};



export const CharacterDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);

    if (!id) return null;

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Button
                    startIcon={<ArrowBackIcon />}
                    onClick={() => navigate(-1)}
                    color="inherit"
                >
                    Back to List
                </Button>
                <Button
                    startIcon={<EditIcon />}
                    variant="contained"
                    onClick={() => setIsEditing(!isEditing)}
                >
                    {isEditing ? 'Cancel Edit' : 'Edit Character'}
                </Button>
            </Box>

            <Suspense fallback={<CharacterDetailsSkeleton />}>
                <CharacterDetailsContent id={id} isEditing={isEditing} setIsEditing={setIsEditing} />
            </Suspense>
        </Container>
    );
};
