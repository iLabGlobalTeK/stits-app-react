import React from 'react';
import { Grid, TextField } from '@mui/material';
import { styled } from '@mui/system';

const GridItem = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(1),
}));

const DeliveryDate = ({ value, onChange }) => (
    <GridItem item xs={12} sm={6}>
        <TextField
            fullWidth
            label="Delivery Date"
            type="date"
            value={value}
            onChange={onChange}
            InputLabelProps={{
                shrink: true,
            }}
        />
    </GridItem>
);

export default DeliveryDate;
