import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

export const Starfield: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const numStars = 600;
        const stars: Star[] = [];

        interface Star {
            x: number;
            y: number;
            z: number;
            pz: number;
        }

        const initStar = (star: Star) => {
            star.x = (Math.random() - 0.5) * width * 2;
            star.y = (Math.random() - 0.5) * height * 2;
            star.z = width;
            star.pz = width;
        };

        for (let i = 0; i < numStars; i++) {
            const star = { x: 0, y: 0, z: 0, pz: 0 };
            initStar(star);
            star.z = Math.random() * width;
            star.pz = star.z;
            stars.push(star);
        }

        let animationFrameId: number;
        const speed = 8;

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
            ctx.fillRect(0, 0, width, height);

            ctx.lineCap = 'round';
            const cx = width / 2;
            const cy = height / 2;

            stars.forEach(star => {
                star.pz = star.z;
                star.z -= speed;

                if (star.z < 1) {
                    initStar(star);
                    star.z = width;
                    star.pz = width;
                }

                const px = cx + (star.x / star.z) * cx;
                const py = cy + (star.y / star.z) * cy;

                const ppx = cx + (star.x / star.pz) * cx;
                const ppy = cy + (star.y / star.pz) * cy;

                const depthRatio = 1 - (star.z / width);

                ctx.strokeStyle = `rgba(180, 225, 255, ${Math.max(0.1, depthRatio)})`;
                ctx.lineWidth = Math.max(0.5, depthRatio * 3);

                ctx.beginPath();
                ctx.moveTo(ppx, ppy);
                ctx.lineTo(px, py);
                ctx.stroke();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        let resizeTimeout: ReturnType<typeof setTimeout>;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                width = window.innerWidth;
                height = window.innerHeight;
                canvas.width = width;
                canvas.height = height;
            }, 150);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 0,
                pointerEvents: 'none',
                bgcolor: 'black'
            }}
        >
            <canvas ref={canvasRef} />
        </Box>
    );
};
