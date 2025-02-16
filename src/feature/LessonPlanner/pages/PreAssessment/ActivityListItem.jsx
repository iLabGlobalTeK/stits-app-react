import React, { useState, useEffect } from 'react';
import { ListItem, TextField, IconButton, Select, MenuItem, FormControl, InputLabel, Box, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import Autocomplete from '@mui/material/Autocomplete';
import Duration from '../../common/Duration';

// Importing JSON data
import inClassActivities from './in_class.json';
import atHomeActivities from './at_home.json';

export default function ActivityListItem({ item, index, onValueChange, onDeleteItem }) {
    const [location, setLocation] = useState(item.location || '');
    const [activity, setActivity] = useState(item.activity || '');
    const [duration, setDuration] = useState(item.duration || '');

    // Get the activity options based on location
    const activityOptions = location === 'inClass' ? inClassActivities : atHomeActivities;
    // Find the selected activity object to get its tooltip text
    const selectedActivity = activityOptions.find(option => option.label === activity);

    useEffect(() => {
        onValueChange(index, { location, activity, duration });
    }, [location, activity, duration, index, onValueChange]);

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
        setActivity(''); // Reset activity when location changes
    };

    const handleActivityChange = (event, newValue) => {
        setActivity(newValue ? newValue.label : '');
    };

    const handleDurationChange = (newDuration) => {
        setDuration(newDuration);
    };

    return (
        <ListItem key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
                <FormControl variant="standard" sx={{ minWidth: "20%", flex: 1 }}>
                    <InputLabel id={`location-label-${index}`}>Location</InputLabel>
                    <Select
                        labelId={`location-label-${index}`}
                        value={location}
                        onChange={handleLocationChange}
                        fullWidth
                    >
                        <MenuItem value="inClass">In Class</MenuItem>
                        <MenuItem value="atHome">At Home</MenuItem>
                    </Select>
                </FormControl>
                <Autocomplete
                    sx={{ flex: 2 }}
                    options={activityOptions}
                    getOptionLabel={(option) => option.label}
                    value={activity ? { label: activity } : null}
                    onChange={handleActivityChange}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            placeholder="Select an activity"
                            fullWidth
                            InputProps={{
                                ...params.InputProps,
                                disableUnderline: true,
                            }}
                        />
                    )}
                />
                {selectedActivity && selectedActivity.helpText && (
                    <Tooltip title={selectedActivity.helpText}>
                        <InfoIcon sx={{ cursor: 'pointer' }} />
                    </Tooltip>
                )}
                <Duration sx={{ flex: 1 }} fullWidth value={duration} onChange={handleDurationChange} />
                {index > 0 && (
                    <IconButton onClick={() => onDeleteItem(index)}>
                        <DeleteIcon />
                    </IconButton>
                )}
            </Box>
        </ListItem>
    );
}
