import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate, useSearchParams } from 'react-router-dom';

const BASE_URL = "/teacher/add"

export default function FormPage({ header, contentTitle, contentSubtitle, children, page = 1 }) {
    const navigate = useNavigate()

    const prevPage = page > 1 ? page - 1 : null;
    const nextPage = page + 1;

    const handlePrevPage = () => {
        if (prevPage) {
            navigate(`${BASE_URL}?page=${prevPage}`)
        }
    };

    const handleNextPage = () => {
        navigate(`${BASE_URL}?page=${nextPage}`)
    };

    return (
        <Container>
            <ContentWrapper>
                {header && (
                    <Typography variant="h4" sx={{ mb: 4 }}>
                        {header}
                    </Typography>
                )}
                <StyledBox>
                    <Box sx={{ mb: 2, textAlign: "left" }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            {contentTitle}
                        </Typography>
                        {contentSubtitle && (
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                {contentSubtitle}
                            </Typography>
                        )}
                    </Box>
                    {children}
                </StyledBox>

                <ButtonContainer>
                    {prevPage && (
                        <Button
                            type="button"
                            onClick={handlePrevPage}
                            variant="contained"
                            color="primary"
                        >
                            Previous
                        </Button>
                    )}
                    <Button
                        type="button"
                        onClick={handleNextPage}
                        variant="contained"
                        color="primary"
                    >
                        Next
                    </Button>
                </ButtonContainer>
            </ContentWrapper>
        </Container>
    );
}

// Styled Components

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    width: "100%"
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
    textAlign: "center",
    width: "100%",
    maxWidth: "800px",
    marginTop: theme.spacing(6),
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#F7F7F7',
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(4),
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    marginTop: theme.spacing(4),
    gap: theme.spacing(1),
    '& .MuiButton-root': {
        borderRadius: '20px',
        width: "120px",
        padding: theme.spacing(1),
    },
}));
