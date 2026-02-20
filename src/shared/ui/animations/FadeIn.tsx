import React from 'react';
import { Box, type BoxProps } from '@mui/material';
import { motion } from 'framer-motion';

interface FadeInProps extends BoxProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    slide?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, duration = 600, slide = true, sx, ...rest }) => {
    return (
        <Box sx={sx} {...rest}>
            <motion.div
                initial={{ opacity: 0, y: slide ? 16 : 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: slide ? -16 : 0 }}
                transition={{
                    duration: duration / 1000,
                    delay: delay / 1000,
                    ease: 'easeOut',
                }}
            >
                {children}
            </motion.div>
        </Box>
    );
};
