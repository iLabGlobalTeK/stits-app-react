import { Box, Grid, Typography } from '@mui/material';
import { useState, useEffect, useContext } from 'react';
import AppLogo from '../../../../components/AppLogo';
import { FormContext } from '../../index';
import { useNavigate } from 'react-router-dom';
import Subject from './Subject';
import Unit from './Unit';
import LessonNumber from './LessonNumber';
import Topic from './Topic';
import Classroom from './Classroom';
import DeliveryDate from './DeliveryDate';
import TotalDuration from './TotalDuration';
import Notes from './Notes';
import Submit from './Submit';

export default function Details({ key = 1 }) {
    // Loading form data
    const { formData, setFormData } = useContext(FormContext);

    // All the fields for this page of the form
    const [subject, setSubject] = useState(formData.subject || "");
    const [unit, setUnit] = useState(formData.unit || "");
    const [lessonID, setLessonID] = useState(formData.lessonID || 1);
    const [topic, setTopic] = useState(formData.topic || "");
    const [classRoom, setClassRoom] = useState(formData.classRoom || "");
    const [deliveryDate, setDeliveryDate] = useState(formData.deliveryDate || "");
    const [totalDuration, setTotalDuration] = useState(formData.totalDuration || "0:00");
    const [notes, setNotes] = useState(formData.notes || "");
    const navigate = useNavigate();

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            subject,
            unit,
            lessonID,
            topic,
            classRoom,
            deliveryDate,
            totalDuration,
            notes,
        }));
    }, [subject, unit, lessonID, topic, classRoom, deliveryDate, totalDuration, notes, setFormData]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        navigate(`/teacher/add?page=${key + 1}`);
    };

    return (
        <Box
            component="section"
            sx={{
                width: "min(100vh,100%)",
                textAlign: "center",
                overflow: "hidden"
            }}
        >
            <AppLogo size="12rem" />
            <Typography variant='h4' color="secondary" fontWeight="bold" mt={4}>
                Create your lesson plan
            </Typography>
            <Grid
                component="form"
                container
                spacing={1}
                onSubmit={handleOnSubmit}
                sx={{ marginTop: 4 }}
            >
                <Subject value={subject} onChange={(e) => setSubject(e.target.value)} />
                <Unit value={unit} onChange={(e) => setUnit(e.target.value)} />
                <LessonNumber value={lessonID} onChange={(e) => setLessonID(e.target.value)} uc={1} />
                <Topic value={topic} onChange={(e) => setTopic(e.target.value)} />
                <Classroom value={classRoom} onChange={(e) => setClassRoom(e.target.value)} />
                <DeliveryDate value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} />
                <TotalDuration value={totalDuration} onChange={setTotalDuration} />
                <Notes value={notes} onChange={(e) => setNotes(e.target.value)} />
                <Submit />
            </Grid>
        </Box>
    );
}
