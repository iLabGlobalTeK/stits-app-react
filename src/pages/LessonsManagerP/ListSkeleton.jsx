// ListSkeleton.jsx
import React from 'react';
import { List, ListItem, ListItemText, Skeleton } from '@mui/material';

export default function ListSkeleton() {
  return (
    <List>
      {Array.from(new Array(8)).map((_, index) => (
        <ListItem key={index}>
          <Skeleton variant="rectangular" width={50} height={50} style={{ marginRight: '1rem' }} />
          <ListItemText
            primary={<Skeleton variant="text" height={30} />}
            secondary={<Skeleton variant="text" width="80%" height={20} />}
          />
        </ListItem>
      ))}
    </List>
  );
}
