import { List, ListItem, TextField, Typography, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DynamicList({ items = [], onItemChange, onAddItem, onDeleteItem, placeholder = "Start typing..." }) {
    return (
        <List sx={{ backgroundColor: '#FFFFFF', borderRadius: 1, padding: 2 }}>
            {items.map((item, index) => (
                <ListItem key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body1" sx={{ mr: 1 }}>{index + 1}.</Typography>
                    <TextField
                        required
                        variant="standard"
                        fullWidth
                        placeholder={placeholder}
                        value={item}
                        onChange={(e) => onItemChange(index, e.target.value)}
                        InputProps={{
                            disableUnderline: true,
                        }}
                    />
                    {index > 0 && (
                        <IconButton onClick={() => onDeleteItem(index)}>
                            <DeleteIcon />
                        </IconButton>
                    )}
                </ListItem>
            ))}
            <ListItem sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <IconButton onClick={onAddItem}>
                    <AddCircleOutlineIcon />
                </IconButton>
            </ListItem>
        </List>
    );
}
