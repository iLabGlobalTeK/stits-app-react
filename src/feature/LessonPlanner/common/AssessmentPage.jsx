import React from 'react';
import { Box, Typography, IconButton, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';
import FormPage from './FormPage';

export default function AssessmentPage({ header, contentTitle, contentSubtitle, page, children }) {
    return (
        <FormPage
            header={header}
            contentTitle={contentTitle}
            contentSubtitle={contentSubtitle}
            page={page}
        >
            <Container>
                {children}
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
                        sx={{
                            width: '100px',
                            ml: 2,
                        }}
                    />
                </TechIntegrationRow>
            </Container>
        </FormPage>
    );
}

// Styled Components
const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F7F7F7',
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    boxSizing: 'border-box',
}));

const TechIntegrationRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(2),
}));
