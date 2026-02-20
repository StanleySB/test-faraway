import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <Container maxWidth="sm">
                    <Box sx={{ p: 4, mt: 8, textAlign: 'center', bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3 }}>
                        <Typography variant="h5" color="error" gutterBottom fontWeight="bold">
                            Something went wrong
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 4 }}>
                            {this.state.error?.message || 'An unexpected error occurred in the application.'}
                        </Typography>
                        <Button variant="contained" onClick={() => window.location.reload()}>
                            Reload Application
                        </Button>
                    </Box>
                </Container>
            );
        }

        return this.props.children;
    }
}
