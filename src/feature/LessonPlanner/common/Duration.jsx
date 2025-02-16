import React, { useState } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Duration = ({ value, onChange, ...props }) => {
    const formatTime = (input) => {
        const cleaned = input.replace(/[^\d]/g, '');

        let formatted = cleaned;
        if (cleaned.length > 2) {
            formatted = `${cleaned.slice(0, -2)}:${cleaned.slice(-2)}`;
        }

        return formatted;
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        const formattedValue = formatTime(inputValue);
        onChange(formattedValue);
    };

    return (
        <TextField
            {...props}
            label="Total Duration"
            value={value}
            onChange={handleInputChange}
            placeholder="hh:mm"
            type="text"
            inputProps={{
                inputMode: 'numeric',
                pattern: '\\d?:?\\d+',
                style: { textAlign: 'center' },
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="end">
                        <AccessTimeIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default Duration