import React, { useState } from 'react';
import { Box, IconButton, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import InfoIcon from '@mui/icons-material/Info';

// Define the styled component
const TechIntegrationRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(2),
}));

// Create the main component
const TechIntegrationComponent = ({ onLevelChange }) => {
    const [techLevel, setTechLevel] = useState(1); // Initialize with a default value of 1

    // Handle the change of tech integration level
    const handleChange = (event) => {
        const value = event.target.value;
        if (value >= 1 && value <= 5) {
            setTechLevel(value);
            if (onLevelChange) {
                onLevelChange(value);
            }
        }
    };

    // Method to export the tech integration level
    const exportTechLevel = () => {
        console.log("Exporting Tech Integration Level:", techLevel);
        // You can replace the console.log with any logic you need to export the value
        return techLevel;
    };

    return (
        <TechIntegrationRow>
            <IconButton>
                <InfoIcon sx={{ color: 'white', backgroundColor: '#2B4C7E', borderRadius: '50%' }} />
            </IconButton>
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'black', ml: 1 }}>
                STITS Technology Integration Level:
            </Typography>
            <TextField
                type="number"
                variant="outlined"
                size="small"
                value={techLevel}
                onChange={handleChange}
                sx={{
                    width: '100px',
                    ml: 2,
                }}
                inputProps={{ min: 1, max: 5 }}
            />
            <Button onClick={exportTechLevel} variant="contained" sx={{ ml: 2 }}>
                Export Level
            </Button>
        </TechIntegrationRow>
    );
};

// Export the component
export default TechIntegrationComponent;
