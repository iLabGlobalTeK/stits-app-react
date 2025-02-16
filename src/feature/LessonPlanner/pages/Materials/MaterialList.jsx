import { Box, Table, TableBody, TableCell, TableHead, TableRow, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';

export default function MaterialList({ materials, onDeleteMaterial }) {
    return (
        <StyledTable>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Type</TableCell>
                        <TableCell>Details</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {materials.map((material, index) => (
                        <TableRow key={index}>
                            <TableCell>{material.type}</TableCell>
                            <TableCell>{material.value}</TableCell>
                            <TableCell>
                                <IconButton onClick={() => onDeleteMaterial(index)}>
                                    <DeleteIcon color="error" />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </StyledTable>
    );
}

// Styled Components
const StyledTable = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(3),
    '& .MuiTableCell-root': {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
}));
