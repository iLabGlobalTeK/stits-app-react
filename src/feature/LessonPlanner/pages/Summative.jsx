import React, { useContext, useState, useEffect } from 'react';
import AssessmentPage from '../common/AssessmentPage';
import DynamicList from '../common/DynamicList';
import { FormContext } from '..';

export default function Summative({ page }) {
    const { formData, setFormData } = useContext(FormContext);

    // Initialize state from formData or with default values
    const [studentSuccess, setStudentSuccess] = useState(formData.summative?.studentSuccess || ['']);
    const [finalProduct, setFinalProduct] = useState(formData.summative?.finalProduct || ['']);

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            summative: {
                studentSuccess,
                finalProduct,
            },
        }));
    }, [studentSuccess, finalProduct, setFormData]);

    const handleStudentSuccessChange = (index, value) => {
        const newStudentSuccess = [...studentSuccess];
        newStudentSuccess[index] = value;
        setStudentSuccess(newStudentSuccess);
    };

    const handleFinalProductChange = (index, value) => {
        const newFinalProduct = [...finalProduct];
        newFinalProduct[index] = value;
        setFinalProduct(newFinalProduct);
    };

    const handleAddStudentSuccess = () => {
        setStudentSuccess([...studentSuccess, '']);
    };

    const handleAddFinalProduct = () => {
        setFinalProduct([...finalProduct, '']);
    };

    const handleDeleteStudentSuccess = (index) => {
        const newStudentSuccess = studentSuccess.filter((_, i) => i !== index);
        setStudentSuccess(newStudentSuccess);
    };

    const handleDeleteFinalProduct = (index) => {
        const newFinalProduct = finalProduct.filter((_, i) => i !== index);
        setFinalProduct(newFinalProduct);
    };

    return (
        <AssessmentPage
            header="Summative Assessment Activity"
            contentTitle="Summative Assessment Ex."
            contentSubtitle="How will you assess your students' success? What will the students deliver by the end of the lesson? (Final Product)"
            page={page}
        >
            <DynamicList
                items={studentSuccess}
                onItemChange={handleStudentSuccessChange}
                onAddItem={handleAddStudentSuccess}
                onDeleteItem={handleDeleteStudentSuccess}
                placeholder="Describe how you will assess student success"
            />
            <DynamicList
                items={finalProduct}
                onItemChange={handleFinalProductChange}
                onAddItem={handleAddFinalProduct}
                onDeleteItem={handleDeleteFinalProduct}
                placeholder="Describe the final product students will deliver"
            />
        </AssessmentPage>
    );
}
