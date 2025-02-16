import { lazy } from 'react';
import { Container } from '@mui/material';
import { createContext, useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';

export const FormContext = createContext();

const Starter = lazy(() => import('./pages/Starter'));
const Details = lazy(() => import('./pages/Details'));
const Objectives = lazy(() => import('./pages/Objectives'));
const Methods = lazy(() => import('./pages/Methods'));
const Media = lazy(() => import('./pages/Media'));
const Materials = lazy(() => import('./pages/Materials'));
const Pre = lazy(() => import('./pages/PreAssessment'));
const Formative = lazy(() => import('./pages/Formative'));
const Summative = lazy(() => import('./pages/Summative'));
const ISTEObjectives = lazy(() => import('./pages/ISTEObjectives'));
const MetaCognitive = lazy(() => import('./pages/MetaCognitive'));
const Introduction = lazy(() => import('./pages/Introduction'));
const LessonSequence = lazy(() => import('./pages/LessonSequence'));
const ReflectAndRevise = lazy(() => import('./pages/ReflectAndRevise'));
const Finalize = lazy(() => import('./pages/Finalize'))

export default function LessonPlanner() {
    // Load initial formData from sessionStorage or initialize as an empty object
    const [formData, setFormData] = useState(() => {
        const savedFormData = sessionStorage.getItem('formData');
        return savedFormData ? JSON.parse(savedFormData) : {};
    });

    const [searchParams] = useSearchParams();

    // Save formData to sessionStorage whenever it changes
    useEffect(() => {
        sessionStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    // Memoize the pages array to avoid recreating it on every render
    const pages = useMemo(() => [
        <Details key={1} page={1} />,
        <Objectives key={2} page={2} />,
        <ISTEObjectives key={3} page={3} />,
        <Methods key={4} page={4} />,
        <Media key={5} page={5} />,
        <Materials key={6} page={6} />,
        <Pre key={7} page={7} />,
        <Formative key={8} page={8} />,
        <Summative key={9} page={9} />,
        <MetaCognitive key={10} page={10} />,
        <Introduction key={11} page={11} />,
        <LessonSequence key={12} page={12} />,
        <ReflectAndRevise key={13} page={13} />,
        <Finalize key={14} page={14} />
    ], []);


    const fetchFormPage = () => {
        // Get the 'page' parameter from the search params and parse it as an integer
        const pageParam = searchParams.get('page');
        const pageIndex = parseInt(pageParam, 10);

        // If page is not defined or page=0, return the starter page
        if (!pageParam || pageIndex === 0) {
            return <Starter />;
        }

        // Check if the pageIndex is a valid number and within the bounds of the pages array
        if (!isNaN(pageIndex) && pageIndex > 0 && pageIndex <= pages.length) {
            return pages[pageIndex - 1];
        }

        // Fallback in case of an invalid page parameter
        return <div>Page not found</div>;
    };

    return (
        <Container disableGutters maxWidth={false} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <FormContext.Provider value={{ formData, setFormData }}>
                <Suspense fallback={<div>Loading...</div>}>
                    {fetchFormPage()}
                </Suspense>
            </FormContext.Provider>
        </Container>
    );
}
