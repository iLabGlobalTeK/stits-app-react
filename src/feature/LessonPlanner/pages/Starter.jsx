import { Button, Typography } from '@mui/material';
import AppLogo from "../../../components/AppLogo";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { FormContext } from '..';
import { FormPageLayout } from '../common/FormPageLayout';

/**
 * Starter component serves as the initial screen for the lesson planning application.
 * It allows users to start a new lesson plan by creating a new instance of `formData`
 * and navigating to the first page of the form.
 */
export default function Starter() {
    const { formData, setFormData } = useContext(FormContext);
    const navigate = useNavigate();
    const handleOnClick = () => {
        if (!formData) {
            setFormData({});
            alert("Successfully created an instance of formData");
        }
        navigate("/teacher/add?page=1");
    };
    return (
        <FormPageLayout elevation={8}>
            <AppLogo size="12rem" />
            <Typography variant="h4" color="secondary" fontWeight="bold" sx={{ mt: 6 }} gutterBottom>
                S.T.I.T.S
            </Typography>
            <Typography variant="h6" color="secondary" gutterBottom>
                Technology Lesson Planning Template
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                Start Planning Tech Integrated Lessons
            </Typography>
            <Button
                variant="contained"
                size="large"
                sx={{
                    mt: 2,
                    mb: 4
                }}
                onClick={handleOnClick}
            >
                New Lesson Plan
            </Button>
        </FormPageLayout>
    );
}
