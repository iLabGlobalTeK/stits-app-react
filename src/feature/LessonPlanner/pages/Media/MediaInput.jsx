import { Box, IconButton, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import YouTubeIcon from '@mui/icons-material/YouTube';
import UploadIcon from '@mui/icons-material/CloudUpload';
import LinkIcon from '@mui/icons-material/Link';
import { useState } from 'react';

export default function MediaInput({ onAddMedia }) {
    const [url, setUrl] = useState("")

    const handleAddMedia = (type) => {
        onAddMedia({ type, url: url });
    };

    return (
        <Box>
            <StyledTextField
                variant="outlined"
                placeholder="Add a media link or upload"
                fullWidth
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <ButtonContainer>
                <IconButton onClick={() => handleAddMedia('Drive')}>
                    <AddToDriveIcon />
                </IconButton>
                <IconButton onClick={() => handleAddMedia('YouTube')}>
                    <YouTubeIcon />
                </IconButton>
                <IconButton onClick={() => handleAddMedia('Upload')}>
                    <UploadIcon />
                </IconButton>
                <IconButton onClick={() => handleAddMedia('Link')}>
                    <LinkIcon />
                </IconButton>
            </ButtonContainer>
        </Box>
    );
}

// Styled Components
const StyledTextField = styled(TextField)({
    marginBottom: '10px',
});

const ButtonContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(1),
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
}));
