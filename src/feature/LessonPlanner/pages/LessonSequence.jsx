import React, { useState, useContext, useEffect } from 'react';
import AssessmentPage from '../common/AssessmentPage';
import DynamicList from '../common/DynamicList';
import { TextField } from '@mui/material';
import { FormContext } from '..';

export default function LessonSequence({ page }) {
  const { formData, setFormData } = useContext(FormContext);

  // Initialize state from formData or with default values
  const [lessonSteps, setLessonSteps] = useState(formData.lessonSequence?.steps || ['']);
  const [lessonClosure, setLessonClosure] = useState(formData.lessonSequence?.closure || '');
  const [duration, setDuration] = useState(formData.lessonSequence?.duration || '');

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      lessonSequence: {
        steps: lessonSteps,
        closure: lessonClosure,
        duration,
      },
    }));
  }, [lessonSteps, lessonClosure, duration, setFormData]);

  const handleLessonStepChange = (index, value) => {
    const newLessonSteps = [...lessonSteps];
    newLessonSteps[index] = value;
    setLessonSteps(newLessonSteps);
  };

  const handleAddLessonStep = () => {
    setLessonSteps([...lessonSteps, '']);
  };

  const handleDeleteLessonStep = (index) => {
    const newLessonSteps = lessonSteps.filter((_, i) => i !== index);
    setLessonSteps(newLessonSteps);
  };

  const handleClosureChange = (e) => {
    setLessonClosure(e.target.value);
  };

  const handleDurationChange = (newDuration) => {
    setDuration(newDuration);
  };

  return (
    <AssessmentPage
      header="Lesson Sequence (Development)"
      contentTitle="Outline the Steps of the Lesson"
      contentSubtitle="What are the key steps in your lesson?"
      page={page}
    >
      <DynamicList
        items={lessonSteps}
        onItemChange={handleLessonStepChange}
        onAddItem={handleAddLessonStep}
        onDeleteItem={handleDeleteLessonStep}
        placeholder="Describe the steps of the lesson"
      />
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Lesson Closure"
        value={lessonClosure}
        onChange={handleClosureChange}
        sx={{ my: 2 }}
      />
    </AssessmentPage>
  );
}
