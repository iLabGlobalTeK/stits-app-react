import React from 'react';
import { Grid, FormGroup, TextField, FormHelperText } from '@mui/material';
import { styled } from '@mui/system';

const GridItem = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(1),
}));

const Notes = ({ value, onChange }) => (
    <GridItem item xs={12} sm={6}>
        <FormGroup>
            <TextField
                fullWidth
                label="Notes"
                value={value}
                onChange={onChange}
                placeholder="Enter notes here"
                multiline
                rows={4}
            />
        </FormGroup>
        <FormHelperText>
            changes in lesson delivery/plan
        </FormHelperText>
    </GridItem>
);

export default Notes;
