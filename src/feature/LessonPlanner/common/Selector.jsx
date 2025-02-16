import { Autocomplete, InputAdornment, TextField, Tooltip, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';

/**
 * The Selector component allows users to enter a single value or select from a list.
 * 
 * @param {Array} options - The options for the autocomplete.
 * @param {Function} onSelect - Callback function when a value is selected.
 * @param {String} label - The label for the text field.
 * @param {String} placeholder - Placeholder text for the text field.
 * @param {ReactNode} icon - An optional icon to display inside the text field.
 * @param {String} helperText - Helper text to display below the text field.
 * @param {Boolean} uniqueOption - Whether the input is not present in the options.
 * @param {String} uniqueMessage - The message to show when the uniqueOption is true.
 * @returns {JSX.Element}
 */
export default function Selector({
    value = "",
    options = [],
    onSelect,
    label = "Select an option",
    placeholder = "Start typing...",
    icon = <AddIcon color="primary" />,
    helperText = "",
    uniqueOption = false,
    uniqueMessage = "This item will be added to your list",
}) {
    const [inputValue, setInputValue] = useState(value);

    const handleInputChange = (event, newInputValue) => {
        setInputValue(newInputValue);
    };

    const handleOnChange = (event, newValue) => {
        onSelect(newValue);
    };

    const isUnique = inputValue && !options.includes(inputValue);

    return (
        <Box textAlign="left" gap={1}>
            <Autocomplete
                freeSolo
                options={options}
                inputValue={inputValue}
                onInputChange={handleInputChange}
                onChange={handleOnChange}
                renderInput={(params) => (
                    <TextInput
                        {...params}
                        label={label}
                        placeholder={placeholder}
                        icon={icon}
                        helperText={helperText}
                        uniqueOption={isUnique && uniqueOption}
                        uniqueMessage={uniqueMessage}
                    />
                )}
            />
        </Box>
    );
}

const TextInput = ({ label, placeholder, icon, helperText, uniqueOption, uniqueMessage, ...params }) => {
    return (
        <TextField
            {...params}
            fullWidth
            label={label}
            placeholder={placeholder}
            helperText={helperText}
            InputProps={{
                ...params.InputProps,
                startAdornment: uniqueOption && (
                    <InputAdornment position="start">
                        <Tooltip title={uniqueMessage}>
                            {icon}
                        </Tooltip>
                    </InputAdornment>
                ),
            }}
        />
    );
};
