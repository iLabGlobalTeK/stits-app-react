import { Box, Table, TableBody, TableCell, TableHead, TableRow, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';

export default function MediaTable({ media = [], onDeleteMedia }) {
    return (
        <StyledMediaTable>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Type</TableCell>
                        <TableCell>Media</TableCell>
                        <TableCell align="right">Actions</TableCell> {/* Added Actions column */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {media.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{item.type}</TableCell>
                            <TableCell>{item.value}</TableCell>
                            <TableCell align="right">
                                <IconButton onClick={() => onDeleteMedia(index)}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell> {/* Added delete button */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </StyledMediaTable>
    );
}

// Styled Components
const StyledMediaTable = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(3),
    '& .MuiTableCell-root': {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
}));
