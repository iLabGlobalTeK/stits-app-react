import { Box, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

export default function DropBox({ onFileDrop }) {
    return (
        <StyledDropBox>
            <CloudUploadIcon sx={{ fontSize: 40, color: 'gray' }} />
            <Typography variant="body2" color="textSecondary">
                Drag and drop files here or click to upload
            </Typography>
            <input type="file" onChange={onFileDrop} style={{ display: 'none' }} />
        </StyledDropBox>
    );
}

// Styled Components
const StyledDropBox = styled(Box)(({ theme }) => ({
    border: `2px dashed ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(4),
    textAlign: 'center',
    color: 'gray',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}));
