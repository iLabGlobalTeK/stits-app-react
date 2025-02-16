import React, { useState, useContext, useEffect } from 'react';
import AssessmentPage from '../common/AssessmentPage';
import DynamicList from '../common/DynamicList';
import { FormControl, InputLabel, MenuItem, Select, Box, Typography } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS
import { FormContext } from '..';

export default function ReflectAndRevise({ page }) {
  const { formData, setFormData } = useContext(FormContext);

  // Initialize state from formData or with default values
  const [isLastLesson, setIsLastLesson] = useState(formData.reflectAndRevise?.isLastLesson || 'Yes');
  const [nextLessonObjectives, setNextLessonObjectives] = useState(formData.reflectAndRevise?.nextLessonObjectives || ['']);
  const [reflectionText, setReflectionText] = useState(formData.reflectAndRevise?.reflectionText || '');

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      reflectAndRevise: {
        isLastLesson,
        nextLessonObjectives,
        reflectionText,
      },
    }));
  }, [isLastLesson, nextLessonObjectives, reflectionText, setFormData]);

  const handleNextLessonObjectiveChange = (index, value) => {
    const newObjectives = [...nextLessonObjectives];
    newObjectives[index] = value;
    setNextLessonObjectives(newObjectives);
  };

  const handleAddNextLessonObjective = () => {
    setNextLessonObjectives([...nextLessonObjectives, '']);
  };

  const handleDeleteNextLessonObjective = (index) => {
    const newObjectives = nextLessonObjectives.filter((_, i) => i !== index);
    setNextLessonObjectives(newObjectives);
  };

  return (
    <AssessmentPage
      header="Teacher: Reflect & Revise Lesson [Self Assessment]"
      contentTitle="How will you revise this lesson?"
      contentSubtitle="Based on your students’ results and personal reflection, how will you revise this lesson if necessary?"
      page={page}
    >
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Reflect on this Lesson:
        </Typography>
        <ReactQuill
          theme="snow"
          value={reflectionText}
          onChange={setReflectionText}
          placeholder="Write your reflection here..."
          style={{ height: '300px', marginBottom: '20px' }} // Increased the height of the Quill editor
        />
      </Box>
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'blue', mb: 2 }}>
          WHAT’S NEXT? Is this the last lesson in the unit?
        </Typography>
        <FormControl variant="standard" fullWidth>
          <InputLabel>Is this the last lesson in the unit?</InputLabel>
          <Select
            value={isLastLesson}
            onChange={(e) => setIsLastLesson(e.target.value)}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {isLastLesson === 'No' && (
        <DynamicList
          items={nextLessonObjectives}
          onItemChange={handleNextLessonObjectiveChange}
          onAddItem={handleAddNextLessonObjective}
          onDeleteItem={handleDeleteNextLessonObjective}
          placeholder="What are the objectives for your next lesson?"
        />
      )}
    </AssessmentPage>
  );
}
