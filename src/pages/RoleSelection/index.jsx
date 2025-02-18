import { Box, Button, Container, styled, Typography } from "@mui/material";
import AppLogo from "../../components/AppLogo";
import { Link as RouterLink } from 'react-router-dom'

const MenuButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
    },
    width: '200px',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 16,
}));

const StyledContainer = styled(Container)(({ theme }) => ({
    textAlign: 'center',
    paddingTop: theme.spacing(4),
}));

const TitleText = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    color: theme.palette.secondary.light
}))

const SubText = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(2),
    color: theme.palette.text.secondary,
}));

export default function RoleSelection() {
    return (
        <StyledContainer>
            <AppLogo size="12rem" />
            <TitleText variant="h4" gutterBottom>
                S.T.I.T.S
            </TitleText>
            <SubText variant="h6">
                A Platform for Technology Education
            </SubText>
            <SubText variant="body1">
                Please select a role to enter the application.
            </SubText>
            <Box mt={4}>
                <MenuButton component={RouterLink} to="/teacher" variant="contained">
                    Teacher
                </MenuButton>
                <MenuButton component={RouterLink} to="/principal" variant="contained">
                    Principal
                </MenuButton>
                <MenuButton component={RouterLink} to="/" variant="contained">
                    Subject Head
                </MenuButton>
                <MenuButton component={RouterLink} to="/" variant="contained">
                    Ed. Officer
                </MenuButton>
            </Box>
        </StyledContainer>
    );
}