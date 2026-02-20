
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <AppBar component="header" position="sticky" sx={{ bgcolor: 'background.paper', mb: 4 }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Box component={Link} to="/" aria-label="Go to Home Page" sx={{ textDecoration: 'none', color: 'primary.main', display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', fontFamily: 'Star Jedi, sans-serif' }}>
                            STAR WARS
                        </Typography>
                        <Typography variant="subtitle1" sx={{ ml: 1, color: 'text.secondary', display: { xs: 'none', sm: 'block' } }}>
                            Character Explorer
                        </Typography>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
