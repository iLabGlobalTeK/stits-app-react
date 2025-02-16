import React from 'react';
import { Grid, FormHelperText } from '@mui/material';
import { styled } from '@mui/system';
import Duration from '../../common/Duration';

const GridItem = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(1),
}));

const TotalDuration = ({ value, onChange }) => {
    return (
        <GridItem item xs={12} sm={6}>
            <Duration fullWidth value={value} onChange={onChange} />
            <FormHelperText>
                Time should match total in class activities
            </FormHelperText>
        </GridItem>
    );
};

export default TotalDuration;
