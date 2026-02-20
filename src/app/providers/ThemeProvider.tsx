import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import React from 'react';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffe81f',
        },
        background: {
            default: '#000000',
            paper: '#111111',
        },
        text: {
            primary: '#f0f0f0',
            secondary: '#a0a0a0',
        }
    },
    typography: {
        fontFamily: '"Star Jedi", "Outfit", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 12,
        h1: {
            fontFamily: '"Star Jedi", "Outfit", sans-serif',
            fontSize: '3.5rem',
        },
        h2: {
            fontFamily: '"Star Jedi", "Outfit", sans-serif',
            fontSize: '2.5rem',
        },
        h4: {
            letterSpacing: '0.05em',
            fontSize: '1.8rem',
        },
        h5: {
            letterSpacing: '0.02em',
            fontSize: '1.25rem',
        },
        button: {
            letterSpacing: '0.05em',
            textTransform: 'none',
        },
        body1: {
            fontSize: '0.9rem',
        },
        body2: {
            fontSize: '0.8rem',
        }
    },
    shape: {
        borderRadius: 16,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: '10px 24px',
                    transition: 'all 0.2s ease-in-out',
                },
                contained: {
                    backgroundColor: '#ffe81f',
                    color: '#000000',
                    '&:hover': {
                        backgroundColor: '#fff170',
                        boxShadow: '0 0 20px rgba(255, 232, 31, 0.4)',
                    }
                },
                outlined: {
                    borderColor: 'rgba(255,232,31,0.5)',
                    color: '#ffe81f',
                    '&:hover': {
                        backgroundColor: 'rgba(255,232,31,0.1)',
                        borderColor: '#ffe81f',
                        boxShadow: '0 0 15px rgba(255, 232, 31, 0.2)',
                    }
                }
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#0a0a0a',
                    backgroundImage: 'none',
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        borderColor: 'rgba(255,232,31,0.5)',
                        boxShadow: '0 12px 28px rgba(0, 0, 0, 0.6), 0 0 15px rgba(255, 232, 31, 0.1)',
                        transform: 'translateY(-6px)',
                    }
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#0a0a0a',
                    backgroundImage: 'none',
                    border: '1px solid rgba(255,255,255,0.08)',
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(16px)',
                    borderBottom: '1px solid rgba(255,232,31,0.15)',
                    backgroundImage: 'none',
                    boxShadow: 'none',
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        backgroundColor: 'rgba(255,255,255,0.03)',
                        borderRadius: 12,
                        transition: 'all 0.2s',
                        '&:hover fieldset': {
                            borderColor: 'rgba(255,232,31,0.5)',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#ffe81f',
                            boxShadow: '0 0 10px rgba(255, 232, 31, 0.15)',
                        }
                    }
                }
            }
        }
    },
});

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
