import React from 'react';
import { Grid, Button } from '@mui/material';
import { styled } from '@mui/system';

const GridItem = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(1),
}));

const Submit = () => (
    <GridItem container item xs={12} sm={12} justifyContent="flex-end">
        <Button type="submit" variant="contained" sx={{ width: "120px" }}>
            Next
        </Button>
    </GridItem>
);

export default Submit;
