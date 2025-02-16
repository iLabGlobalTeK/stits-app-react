import { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Chip, Box } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import ListSkeleton from './ListSkeleton';
import LessonPlanView from './LessonPlanView';
import { db } from '../../config/firebase';

export default function LessonPlansList() {
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

    const handleListItemClick = (plan) => {
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
        return <ListSkeleton />;
    }

    return (
        <div>
            {!selectedPlan ? (
                <Box sx={{ padding: 2 }}>
                    <List>
                        {lessonPlans.map((plan, index) => (
                            <ListItem key={plan.id} onClick={() => handleListItemClick(plan)} button>
                                <ListItemAvatar>
                                    <Avatar
                                        variant="square"
                                        src={`https://source.unsplash.com/random/50x50/?geometry,landscape&sig=${index}`}
                                        alt="Geometric Landscape"
                                        sx={{ width: 50, height: 50, marginRight: '1rem' }}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={plan.subject || 'Untitled Lesson Plan'}
                                    secondary={plan.unit || 'No description available'}
                                />
                                <Chip
                                    label={plan.status || 'pending'}
                                    color={getStatusColor(plan.status)}
                                    sx={{ marginLeft: 'auto' }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            ) : (
                <LessonPlanView lessonPlan={selectedPlan} />
            )}
            {selectedPlan && <button onClick={handleBack}>Back to Lesson Plans</button>}
        </div>
    );
}
