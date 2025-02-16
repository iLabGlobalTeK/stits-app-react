import React from 'react';
import { List, ListItem, IconButton, Box } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ActivityListItem from './ActivityListItem';

export default function ActivityList({ items = [], onItemChange, onAddItem, onDeleteItem }) {

    const handleValueChange = (index, newItem) => {
        onItemChange(index, newItem);
    };

    return (
        <List sx={{ backgroundColor: '#FFFFFF', borderRadius: 1, padding: 2 }}>
            {items.map((item, index) => (
                <ActivityListItem
                    key={index}
                    index={index}
                    item={item}
                    onValueChange={handleValueChange}
                    onDeleteItem={onDeleteItem}
                />
            ))}
            <ListItem sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <IconButton onClick={onAddItem}>
                    <AddCircleOutlineIcon />
                </IconButton>
            </ListItem>
        </List>
    );
}
