import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Chip } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import TileSkeleton from './TileSkeleton';
import LessonPlanView from './LessonPlanView';

export default function LessonPlansGrid() {
    const [loading, setLoading] = useState(true);
    const [lessonPlans, setLessonPlans] = useState([]);
    const [selectedPlan, setSelectedPlan] = useState(null);

    useEffect(() => {
        const fetchLessonPlans = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'lesson-plans'));
                const plans = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setLessonPlans(plans);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching lesson plans:', error);
            }
        };

        fetchLessonPlans();
    }, []);

    const handleTileClick = (plan) => {
        setSelectedPlan(plan);
    };

    const handleBack = () => {
        setSelectedPlan(null);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'accepted':
                return 'success';
            case 'denied':
                return 'error';
            case 'pending':
            default:
                return 'warning';
        }
    };

    if (loading) {
        return <TileSkeleton />;
    }

    return (
        <div>
            {!selectedPlan ? (
                <Grid container spacing={3} sx={{ padding: 2 }}>
                    {lessonPlans.map((plan, index) => (
                        <Grid item xs={12} sm={6} md={4} key={plan.id} onClick={() => handleTileClick(plan)}>
                            <Paper elevation={3} sx={{ padding: '1rem', cursor: 'pointer', position: 'relative' }}>
                                <img
                                    src={`https://source.unsplash.com/random/300x140/?geometry,landscape&sig=${index}`}
                                    alt="Pexels Landscape"
                                    style={{ width: '100%', height: '140px', objectFit: 'cover', marginBottom: '1rem' }}
                                />
                                <Chip
                                    label={plan.status || 'pending'}
                                    color={getStatusColor(plan.status)}
                                    sx={{ position: 'absolute', top: '8px', right: '8px' }}
                                />
                                <Typography variant="h6" component="h2">
                                    {plan.subject} - {plan.unit}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ marginTop: '0.5rem' }}>
                                    Topic: {plan.topic} <br />
                                    Classroom: {plan.classRoom} <br />
                                    Delivery Date: {plan.deliveryDate}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <LessonPlanView lessonPlan={selectedPlan} />
            )}
            {selectedPlan && <button onClick={handleBack}>Back to Lesson Plans</button>}
        </div>
    );
}
