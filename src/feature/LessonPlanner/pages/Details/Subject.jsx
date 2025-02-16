import React from 'react';
import { Grid, TextField } from '@mui/material';
import { styled } from '@mui/system';

const GridItem = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(1),
}));

const Subject = ({ value, onChange }) => (
    <GridItem item xs={12} sm={6}>
        <TextField
            fullWidth
            label="Subject"
            placeholder="Enter subject here"
            value={value}
            onChange={onChange}
        />
    </GridItem>
);

export default Subject;
