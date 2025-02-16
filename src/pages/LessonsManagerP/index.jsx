import { useState } from "react";
import { Button, Container, Pagination, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import CustomToolbar from "./StyledToolbar"; // Adjust the import path as needed
import ListContainer from "./ListContainer"; // Placeholder for list view
import TileContainer from "./TileContainer"; // Placeholder for tile view
import useLessonsData from "./useLessonsData";
import { Link as RouterLink } from "react-router-dom"

const ITEMS_PER_PAGE = 8

// Styled Components
const StyledContainer = styled(Container)(({ theme }) => ({
    position: 'relative',
    padding: theme.spacing(3)
}));

const StyledPagination = styled(Pagination)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
}));

export default function PrincipalLessonsManager() {
    const { lessons, loading } = useLessonsData(); // Assume lessons is being used within ListContainer or TileContainer
    const [category, setCategory] = useState('');
    const [sort, setSort] = useState('');
    const [view, setView] = useState('list');
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(Math.max(Math.ceil(lessons.length / ITEMS_PER_PAGE), 1))

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleSortChange = (event) => {
        setSort(event.target.value);
    };

    const handleViewChange = (event, newView) => {
        if (newView !== null) {
            setView(newView);
        }
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
        <StyledContainer>
            <Typography variant="h4" fontWeight="bold">Lesson Plans</Typography>
            <Typography variant="subtitle1">Manage your lesson plans here</Typography>
            <CustomToolbar
                category={category}
                sort={sort}
                view={view}
                search={search}
                onCategoryChange={handleCategoryChange}
                onSearchChange={handleSearchChange}
                onSortChange={handleSortChange}
                onViewChange={handleViewChange}
            />
            <StyledPagination count={pages} page={page} onChange={handlePageChange} />
            <StyledPaper elevation={8}>
                {view === 'list' ? (
                    <ListContainer search={search} category={category} sort={sort} />
                ) : (
                    <TileContainer search={search} category={category} sort={sort} />
                )}
            </StyledPaper>
            <StyledPagination count={pages} page={page} onChange={handlePageChange} />
        </StyledContainer>
    );
}
