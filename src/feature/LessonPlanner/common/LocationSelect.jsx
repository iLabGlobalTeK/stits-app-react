import React from 'react';
import { Select, MenuItem, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function LocationSelect({ value, onChange }) {
    return (
        <LocationSelectContainer>
            <StyledSelect
                value={value}
                onChange={onChange}
                variant="outlined"
                displayEmpty
                placeholder='Choose one'
            >
                <MenuItem value="">
                    Choose one
                </MenuItem>
                <MenuItem value="In Class">In Class</MenuItem>
                <MenuItem value="At Home">At Home</MenuItem>
            </StyledSelect>
        </LocationSelectContainer>
    );
}

// Styled Components
const LocationSelectContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
}));

const StyledSelect = styled(Select)(({ theme }) => ({
    width: '160px',
    '& .MuiOutlinedInput-root': {
        borderRadius: theme.shape.borderRadius,
        padding: '8px',
    },
}));
