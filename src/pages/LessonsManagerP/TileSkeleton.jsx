// TileSkeleton.jsx
import React from 'react';
import { Grid, Skeleton, Paper } from '@mui/material';

export default function TileSkeleton() {
    return (
        <Grid container spacing={3}>
            {Array.from(new Array(9)).map((_, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper elevation={3} style={{ padding: '1rem' }}>
                        <Skeleton variant="rectangular" width="100%" height={140} />
                        <Skeleton variant="text" width="60%" height={30} style={{ marginTop: '0.5rem' }} />
                        <Skeleton variant="text" width="80%" height={20} style={{ marginTop: '0.5rem' }} />
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
}
