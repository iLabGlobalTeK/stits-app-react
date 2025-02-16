import { Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function DividerWithOr() {
    return (
        <StyledDivider>
            <Typography variant="body2" color="textSecondary">or</Typography>
        </StyledDivider>
    );
}

// Styled Components
const StyledDivider = styled(Divider)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: `${theme.spacing(2)} 0`,
    '&::before, &::after': {
        borderTop: `1px solid ${theme.palette.divider}`,
        content: '""',
        flexGrow: 1,
    },
    '&::before': {
        marginRight: theme.spacing(1),
    },
    '&::after': {
        marginLeft: theme.spacing(1),
    },
}));
