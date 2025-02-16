import { useState, useEffect, useContext } from 'react';
import AssessmentPage from '../common/AssessmentPage';
import DynamicList from '../common/DynamicList'; // The original DynamicList component
import { FormContext } from '../index';

export default function Formative({ page }) {
    const { formData, setFormData } = useContext(FormContext);
    const [items, setItems] = useState(formData.formativeAssessmentData?.items || ['']);

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            formative: {
                items
            },
        }));
    }, [items, setFormData]);

    const handleItemChange = (index, value) => {
        const newItems = [...items];
        newItems[index] = value;
        setItems(newItems);
    };

    const handleAddItem = () => {
        setItems([...items, '']);
    };

    const handleDeleteItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    return (
        <AssessmentPage
            header="Formative Assessment Activities"
            contentTitle="Formative Assessment Ex."
            contentSubtitle="How will you assess student understanding during the lesson? (List below)"
            page={page}
        >
            <DynamicList
                items={items}
                onItemChange={handleItemChange}
                onAddItem={handleAddItem}
                onDeleteItem={handleDeleteItem}
                placeholder="Enter formative assessment example"
            />
        </AssessmentPage>
    );
}
