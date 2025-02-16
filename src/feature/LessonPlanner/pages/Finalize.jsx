import React, { useState, useContext } from 'react';
import { Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { FormContext } from '../index';
import AppLogo from '../../../components/AppLogo';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../config/firebase'; // Adjust the path to your Firebase setup file
import { collection, addDoc } from 'firebase/firestore';

export default function Finalize({ page }) {
    const { formData } = useContext(FormContext);
    const [selectedPage, setSelectedPage] = useState('');
    const navigate = useNavigate();

    const steps = [
        'Details',
        'Objectives',
        'ISTE Objectives',
        'Methods',
        'Media',
        'Materials',
        'Pre-Assessment',
        'Formative Assessment',
        'Summative Assessment',
        'Metacognitive Reflection',
        'Introduction',
        'Lesson Sequence',
        'Reflection & Revision'
    ];

    const handlePageChange = (event) => {
        setSelectedPage(event.target.value);
    };

    const handleFinish = async () => {
        try {
            await addDoc(collection(db, 'lesson-plans'), formData);
            alert('Lesson plan finalized and submitted!');
            navigate('/teacher'); // Redirect to a confirmation page if needed
        } catch (error) {
            console.error('Error adding document: ', error);
            alert('There was an error submitting your lesson plan. Please try again.');
        }
    };

    const handleStart = () => {
        navigate("/teacher/add?page=1");
    };

    const renderTableData = () => {
        const stepKey = selectedPage.toLowerCase().replace(/ /g, '');
        const stepData = formData[stepKey];

        if (!stepData) {
            return (
                <Typography variant="body1">
                    No data available for this section.
                </Typography>
            );
        }

        return (
            <TableContainer component={Paper} sx={{ marginTop: 4 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Key</TableCell>
                            <TableCell>Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.entries(stepData).map(([key, value], index) => (
                            <TableRow key={index}>
                                <TableCell>{key}</TableCell>
                                <TableCell>{JSON.stringify(value, null, 2)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    };

    return (
        <Box sx={{ width: 'min(100vh,100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', marginBottom: 4 }}>
                <AppLogo size='12rem' />
                <Typography variant="h4" color="primary" align="center">
                    Review Your Lesson Plan
                </Typography>
            </Box>

            <FormControl sx={{ marginBottom: 4, minWidth: 300 }}>
                <InputLabel>Select a Page</InputLabel>
                <Select
                    value={selectedPage}
                    onChange={handlePageChange}
                    label="Select a Page"
                    color="secondary"
                >
                    {steps.map((label, index) => (
                        <MenuItem key={index} value={label}>
                            {label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {selectedPage && (
                <Box sx={{ flexGrow: 1, maxWidth: '800px', width: '100%', marginTop: 4 }}>
                    <Typography variant="h5" color="secondary" align="center" gutterBottom>
                        {selectedPage} Data
                    </Typography>
                    {renderTableData()}
                </Box>
            )}

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 4 }}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleFinish}
                    disabled={!selectedPage}
                    sx={{ width: '200px' }}
                >
                    Submit Lesson Plan
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleStart}
                    sx={{ width: '200px' }}
                >
                    Go to Start
                </Button>
            </Box>
        </Box>
    );
}
