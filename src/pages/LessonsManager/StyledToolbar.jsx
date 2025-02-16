// StyledToolbar.jsx
import { Select, MenuItem, TextField, ToggleButton, ToggleButtonGroup, Toolbar, InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

// Styled Toolbar component
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    gap: theme.spacing(2),
}));

const CategorySelect = styled(Select)(({ theme }) => ({
    minWidth: 150,
}));

const SortSelect = styled(Select)(({ theme }) => ({
    minWidth: 150,
}));

const SearchField = styled(TextField)(({ theme }) => ({
    minWidth: 200,
}));

const DisplayToggleGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButton-root': {
        minWidth: 50,
    },
}));

export default function CustomToolbar({ category, search, sort, view, onCategoryChange, onSearchChange, onSortChange, onViewChange }) {
    return (
        <StyledToolbar disableGutters>
            {/* Category Select */}
            <CategorySelect
                value={category}
                onChange={onCategoryChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Category' }}
                renderValue={(selected) => (selected ? selected : "Category")}
            >
                <MenuItem value="">
                    <em>Category</em>
                </MenuItem>
                <MenuItem value="technology">Technology</MenuItem>
                <MenuItem value="education">Education</MenuItem>
                <MenuItem value="health">Health</MenuItem>
            </CategorySelect>

            {/* Search Field */}
            <SearchField
                placeholder="Search..."
                variant="outlined"
                value={search}
                onChange={onSearchChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            
            {/* Sort Select */}
            <SortSelect
                value={sort}
                onChange={onSortChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Sort' }}
                renderValue={(selected) => (selected ? selected : "Sort by")}
            >
                <MenuItem value="">
                    <em>Sort by</em>
                </MenuItem>
                <MenuItem value="date">Date</MenuItem>
                <MenuItem value="popularity">Popularity</MenuItem>
                <MenuItem value="title">Title</MenuItem>
            </SortSelect>


            {/* Display Type Toggle Buttons */}
            <DisplayToggleGroup
                value={view}
                exclusive
                onChange={onViewChange}
                aria-label="view type"
            >
                <ToggleButton value="list" aria-label="list view">
                    <ViewListIcon />
                </ToggleButton>
                <ToggleButton value="tile" aria-label="tile view">
                    <ViewModuleIcon />
                </ToggleButton>
            </DisplayToggleGroup>
        </StyledToolbar>
    );
}
