import { useState } from 'react';
import { Box, TextField, IconButton, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';

const materialOptions = [
    'Document', 'Test', 'Assignment', 'Quiz', 'Website', 'Kahoot', 'Video', 'Link'
];

export default function MaterialInput({ onAddMaterial }) {
    const [materialType, setMaterialType] = useState('');
    const [materialValue, setMaterialValue] = useState('');

    const handleAdd = () => {
        if (materialType && materialValue) {
            onAddMaterial({ type: materialType, value: materialValue });
            setMaterialType('');
            setMaterialValue('');
        }
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <StyledTextField
                select
                label="Material Type"
                value={materialType}
                onChange={(e) => setMaterialType(e.target.value)}
                sx={{ mr: 2, minWidth: 150 }}
            >
                {materialOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </StyledTextField>
            <StyledTextField
                label="Material Details"
                value={materialValue}
                onChange={(e) => setMaterialValue(e.target.value)}
                sx={{ flexGrow: 1, mr: 2 }}
            />
            <IconButton color="primary" onClick={handleAdd}>
                <AddIcon />
            </IconButton>
        </Box>
    );
}

// Styled Components
const StyledTextField = styled(TextField)({
    '& .MuiInputBase-root': {
        fontSize: '1rem',
    },
});
