import { Box, Skeleton, Paper, Divider, Grid, Typography, List, ListItem, ListItemText } from '@mui/material';

const InfoRowSkeleton = ({ valueWidth = '40%' }: { valueWidth?: string }) => (
    <Grid container spacing={2} sx={{ py: 1.5 }}>
        <Grid size={{ xs: 4, sm: 3 }}>
            <Skeleton variant="text" width="80%" />
        </Grid>
        <Grid size={{ xs: 8, sm: 9 }}>
            <Skeleton variant="text" width={valueWidth} />
        </Grid>
    </Grid>
);

const RelationSectionSkeleton = () => (
    <Box sx={{ mt: 3 }}>
        <Typography variant="h6" gutterBottom>
            <Skeleton width={120} />
        </Typography>
        <List dense sx={{ bgcolor: 'background.paper', borderRadius: 1 }}>
            <ListItem>
                <ListItemText primary={<Skeleton width="55%" />} />
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemText primary={<Skeleton width="40%" />} />
            </ListItem>
        </List>
    </Box>
);

export const CharacterDetailsSkeleton = () => {
    const valueWidths = ['35%', '25%', '30%', '20%', '40%', '30%', '35%'];

    return (
        <Box>
            <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, borderRadius: 2 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    <Skeleton width="40%" />
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    {valueWidths.map((w, i) => (
                        <Box key={i}>
                            <InfoRowSkeleton valueWidth={w} />
                            {i < valueWidths.length - 1 && <Divider />}
                        </Box>
                    ))}
                </Box>
            </Paper>

            <Box sx={{ mt: 4 }}>
                <RelationSectionSkeleton />
                <RelationSectionSkeleton />
                <RelationSectionSkeleton />
            </Box>
        </Box>
    );
};
