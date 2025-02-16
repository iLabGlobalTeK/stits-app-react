import React from 'react';
import { Box } from '@mui/material';

export default function AppLogo({ size = "8rem" }) {
    return (
        <Box
            component="img"
            src="/logo.png"
            alt="STITS App Logo"
            sx={{ width: size, height: size }}
        />
    );
}
