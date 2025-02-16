import React, { useState, useContext, useEffect } from 'react';
import AssessmentPage from '../common/AssessmentPage';
import DynamicList from '../common/DynamicList';
import { FormContext } from '..';

export default function MetaCognitive({ page }) {
  const { formData, setFormData } = useContext(FormContext);

  // Initialize state from formData or with default values
  const [reflectionTasks, setReflectionTasks] = useState(formData.metaCognitive?.reflectionTasks || ['']);
  const [duration, setDuration] = useState(formData.metaCognitive?.duration || '');

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      metaCognitive: {
        reflectionTasks,
        duration,
      },
    }));
  }, [reflectionTasks, duration, setFormData]);

  const handleReflectionTaskChange = (index, value) => {
    const newReflectionTasks = [...reflectionTasks];
    newReflectionTasks[index] = value;
    setReflectionTasks(newReflectionTasks);
  };

  const handleAddReflectionTask = () => {
    setReflectionTasks([...reflectionTasks, '']);
  };

  const handleDeleteReflectionTask = (index) => {
    const newReflectionTasks = reflectionTasks.filter((_, i) => i !== index);
    setReflectionTasks(newReflectionTasks);
  };

  const handleDurationChange = (newDuration) => {
    setDuration(newDuration);
  };

  return (
    <AssessmentPage
      header="Metacognitive Reflection Activity"
      contentTitle="Metacognitive Reflection"
      contentSubtitle="What type of metacognitive tasks (self-reflection) will your students engage in?"
      page={page}
    >
      <DynamicList
        items={reflectionTasks}
        onItemChange={handleReflectionTaskChange}
        onAddItem={handleAddReflectionTask}
        onDeleteItem={handleDeleteReflectionTask}
        placeholder="Describe the metacognitive tasks"
      />
    </AssessmentPage>
  );
}
