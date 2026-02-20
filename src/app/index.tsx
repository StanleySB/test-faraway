
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppThemeProvider } from './providers/ThemeProvider';
import { AppQueryProvider } from './providers/QueryProvider';
import { ErrorBoundary } from './providers/ErrorBoundary';
import { Header } from '@widgets/header/ui/Header';
import { CharactersPage } from '@pages/characters/ui/CharactersPage';
import { CharacterDetailsPage } from '@pages/character-details/ui/CharacterDetailsPage';
import { Box } from '@mui/material';

import { Starfield } from '@shared/ui/animations/Starfield';

export const App = () => {
    return (
        <ErrorBoundary>
            <AppQueryProvider>
                <AppThemeProvider>
                    <BrowserRouter basename="/test-faraway/">
                        <Starfield />
                        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
                            <Header />
                            <Box component="main" sx={{ flexGrow: 1 }}>
                                <Routes>
                                    <Route path="/" element={<CharactersPage />} />
                                    <Route path="/character/:id" element={<CharacterDetailsPage />} />
                                    <Route path="*" element={<Navigate to="/" replace />} />
                                </Routes>
                            </Box>
                        </Box>
                    </BrowserRouter>
                </AppThemeProvider>
            </AppQueryProvider>
        </ErrorBoundary>
    );
};
