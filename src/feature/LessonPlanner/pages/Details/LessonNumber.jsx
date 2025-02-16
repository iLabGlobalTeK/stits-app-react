import React from 'react';
import { Grid, FormGroup, FormLabel, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

const GridItem = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(1),
}));

const LessonNumber = ({ value, onChange, uc }) => (
    <GridItem item xs={12} sm={6}>
        <FormGroup sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 1 }}>
            <FormLabel sx={{ marginRight: 'auto' }}>
                Lesson #
            </FormLabel>
            <TextField
                type="number"
                placeholder="Enter lesson position"
                value={value}
                onChange={onChange}
                inputProps={{
                    min: 1,
                    max: uc,
                    step: 1,
                    style: { textAlign: 'center' },
                }}
                sx={{ width: '80px', textAlign: 'center' }}
            />
            <Typography variant="body1">
                Of
            </Typography>
            <TextField
                type="number"
                value={uc}
                InputProps={{
                    readOnly: true,
                    style: { textAlign: 'center' },
                }}
                sx={{ width: '80px', textAlign: 'center' }}
            />
        </FormGroup>
    </GridItem>
);

export default LessonNumber;