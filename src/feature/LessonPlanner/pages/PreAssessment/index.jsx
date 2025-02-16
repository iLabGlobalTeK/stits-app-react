import { useState, useContext, useEffect } from 'react';
import AssessmentPage from '../../common/AssessmentPage';
import ActivityList from './ActivityList'; // Import the ActivityList component
import { FormContext } from '../..';

export default function PreAssessment({ page }) {
    const { formData, setFormData } = useContext(FormContext);

    // Initialize state from formData or with default values
    const [preActivities, setPreActivities] = useState(formData.preAssessmentData?.activities || [{ location: "In Class", activity: "", duration: "" }]);

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            pre: {
                activities: preActivities
            }
        }));
    }, [preActivities, setFormData]);

    const handlePreActivityChange = (index, newData) => {
        setPreActivities(prevActivities =>
            prevActivities.map((activity, i) =>
                i === index ? newData : activity
            )
        );
    };

    const handleAddPreActivity = () => {
        setPreActivities([...preActivities, { location: "In Class", activity: "", duration: "" }]);
    };

    const handleDeletePreActivity = (index) => {
        setPreActivities(preActivities.filter((_, i) => i !== index));
    };

    return (
        <AssessmentPage
            header="Pre-Assessment"
            contentTitle="Pre-Assessment Activity"
            contentSubtitle="Before the lesson starts"
            page={page}
        >
            <ActivityList
                items={preActivities}
                onItemChange={handlePreActivityChange}
                onAddItem={handleAddPreActivity}
                onDeleteItem={handleDeletePreActivity}
            />
        </AssessmentPage>
    );
}
