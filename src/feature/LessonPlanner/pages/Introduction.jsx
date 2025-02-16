import React, { useState, useContext, useEffect } from 'react';
import AssessmentPage from '../common/AssessmentPage';
import DynamicList from '../common/DynamicList';
import { FormContext } from '..';

export default function Introduction({ page }) {
    const { formData, setFormData } = useContext(FormContext);

    // Initialize state from formData or with default values
    const [introductionItems, setIntroductionItems] = useState(formData.introduction?.items || ['']);
    const [duration, setDuration] = useState(formData.introduction?.duration || '');

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            introduction: {
                items: introductionItems,
                duration,
            },
        }));
    }, [introductionItems, duration, setFormData]);

    const handleIntroductionItemChange = (index, value) => {
        const newIntroductionItems = [...introductionItems];
        newIntroductionItems[index] = value;
        setIntroductionItems(newIntroductionItems);
    };

    const handleAddIntroductionItem = () => {
        setIntroductionItems([...introductionItems, '']);
    };

    const handleDeleteIntroductionItem = (index) => {
        const newIntroductionItems = introductionItems.filter((_, i) => i !== index);
        setIntroductionItems(newIntroductionItems);
    };

    const handleDurationChange = (newDuration) => {
        setDuration(newDuration);
    };

    return (
        <AssessmentPage
            header="Introduction to Lesson"
            contentTitle="AT THE BEGINNING: What will you share with students?"
            contentSubtitle="Opening Hook, Establish Lesson Objectives, Set Expectations For Lesson."
            page={page}
        >
            <DynamicList
                items={introductionItems}
                onItemChange={handleIntroductionItemChange}
                onAddItem={handleAddIntroductionItem}
                onDeleteItem={handleDeleteIntroductionItem}
                placeholder="List what you will share with students"
            />
        </AssessmentPage>
    );
}
