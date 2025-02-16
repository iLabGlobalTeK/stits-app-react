import React from 'react';
import { Box, TextField, FormHelperText } from '@mui/material';

export default function Notes() {
    return (
        <Box>
            <TextField
                fullWidth
                multiline
                rows={4} // Set the default number of rows
                variant="outlined"
                label="Notes"
                placeholder="Enter any changes in lesson delivery/plan"
            />
            <FormHelperText>
                (changes in lesson delivery/plan)
            </FormHelperText>
        </Box>
    );
}
