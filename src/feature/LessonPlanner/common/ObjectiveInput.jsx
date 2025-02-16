import { List, ListItem, TextField, Typography, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ObjectiveInput({ objectives, onChange, onAdd, onDelete }) {
    return (
        <List sx={{ backgroundColor: '#FFFFFF', borderRadius: 2, padding: 2 }}>
            {objectives.map((objective, index) => (
                <ListItem key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body1" sx={{ mr: 1 }}>{index + 1}.</Typography>
                    <TextField
                        variant="standard"
                        fullWidth
                        placeholder="Start typing to create a new objective"
                        value={objective}
                        onChange={(e) => onChange(index, e.target.value)}
                        InputProps={{
                            disableUnderline: true,
                        }}
                    />
                    {index > 0 && (
                        <IconButton onClick={() => onDelete(index)}>
                            <DeleteIcon />
                        </IconButton>
                    )}
                </ListItem>
            ))}
            <ListItem sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <IconButton onClick={onAdd}>
                    <AddCircleOutlineIcon />
                </IconButton>
            </ListItem>
        </List>
    );
}
