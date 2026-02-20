import { Grid, Box, Skeleton, Card, CardContent, CardMedia } from '@mui/material';

const SkeletonCard = () => (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia>
            <Skeleton variant="rectangular" height={200} />
        </CardMedia>
        <CardContent sx={{ flexGrow: 1 }}>
            <Skeleton variant="text" width="70%" height={28} sx={{ mb: 1 }} />

            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                <Skeleton variant="rounded" width={50} height={24} />
                <Skeleton variant="rounded" width={100} height={24} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Skeleton variant="text" width="60%" />
                <Skeleton variant="text" width="45%" />
            </Box>
        </CardContent>
    </Card>
);

export const CharacterListSkeleton = () => {
    return (
        <Box>
            <Grid container spacing={3} columns={{ xs: 1, sm: 2, md: 5 }}>
                {Array.from({ length: 10 }).map((_, index) => (
                    <Grid size={1} key={index}>
                        <SkeletonCard />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
