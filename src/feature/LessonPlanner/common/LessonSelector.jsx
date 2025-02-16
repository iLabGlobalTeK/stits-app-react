import React from 'react';
import { Box, TextField, MenuItem, Typography } from '@mui/material';

export default function LessonSelector({ lessonNumber = 1, totalLessons = 9, onLessonChange, onTotalChange }) {
    const lessonNumbers = Array.from({ length: totalLessons }, (_, i) => i + 1);
    const totalLessonNumbers = Array.from({ length: 20 }, (_, i) => i + 1); // Adjust as necessary

    const handleLessonNumberChange = (event) => {
        onLessonChange(event.target.value);
    };

    const handleTotalChange = (event) => {
        onTotalChange(event.target.value);
    };

    return (
        <Box display="flex" alignItems="center" sx={{ width: "100%" }}>
            <Typography variant="body1" color="primary" fontWeight="bold">
                Lesson #
            </Typography>
            <TextField
                select
                value={lessonNumber}
                onChange={handleLessonNumberChange}
                variant="outlined"
                size="small"
                fullWidth
                sx={{ mx: 1, width: '4rem' }}
            >
                {lessonNumbers.map((number) => (
                    <MenuItem key={number} value={number}>
                        {number}
                    </MenuItem>
                ))}
            </TextField>
            <Typography variant="body1" color="primary" fontWeight="bold">
                of
            </Typography>
            <TextField
                select
                value={totalLessons}
                onChange={handleTotalChange}
                variant="outlined"
                size="small"
                fullWidth
                sx={{ ml: 1, width: '4rem' }}
            >
                {totalLessonNumbers.map((number) => (
                    <MenuItem key={number} value={number}>
                        {number}
                    </MenuItem>
                ))}
            </TextField>
        </Box>
    );
}
