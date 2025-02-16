import { useState, useEffect, useContext } from 'react';
import FormPage from '../common/FormPage';
import DynamicList from '../common/DynamicList'; // Import the new component
import { FormContext } from '../index';

export default function Objectives({ page }) {
    const { formData, setFormData } = useContext(FormContext);
    const [objectives, setObjectives] = useState(formData.objectives || [""]);

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            objectives,
        }));
    }, [objectives, setFormData]);

    const handleObjectiveChange = (index, value) => {
        const newObjectives = [...objectives];
        newObjectives[index] = value;
        setObjectives(newObjectives);
    };

    const handleAddObjective = () => {
        setObjectives([...objectives, '']);
    };

    const handleDeleteObjective = (index) => {
        const newObjectives = objectives.filter((_, i) => i !== index);
        setObjectives(newObjectives);
    };

    return (
        <FormPage
            header="Lesson Objectives"
            contentTitle="Objectives"
            contentSubtitle="By the end of the lesson, students should be able to:"
            page={page}
        >
            <DynamicList
                items={objectives}
                onItemChange={handleObjectiveChange}
                onAddItem={handleAddObjective}
                onDeleteItem={handleDeleteObjective}
                placeholder="Start typing to create a new objective"
            />
        </FormPage>
    );

}
