import { useState, useEffect, useContext } from 'react';
import FormPage from '../common/FormPage';
import DynamicList from '../common/DynamicList'; // Import the new component
import { FormContext } from '../index';

export default function ISTEObjectives({ page }) {
  const { formData, setFormData } = useContext(FormContext);
  const [isteObjectives, setIsteObjectives] = useState(formData.isteObjectives || [""]);
  
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      isteObjectives, // Add ISTE Technology Objectives to formData
    }));
  }, [isteObjectives, setFormData]);

  const handleIsteObjectiveChange = (index, value) => {
    const newIsteObjectives = [...isteObjectives];
    newIsteObjectives[index] = value;
    setIsteObjectives(newIsteObjectives);
  };

  const handleAddIsteObjective = () => {
    setIsteObjectives([...isteObjectives, '']);
  };

  const handleDeleteIsteObjective = (index) => {
    const newIsteObjectives = isteObjectives.filter((_, i) => i !== index);
    setIsteObjectives(newIsteObjectives);
  };

  return (
    <FormPage
      header="ISTE Technology Objectives"
      contentTitle="Technology Objectives"
      contentSubtitle="By the end of the lesson, students should be able to achieve the following technology objectives:"
      page={page}
    >
      <DynamicList
        items={isteObjectives}
        onItemChange={handleIsteObjectiveChange}
        onAddItem={handleAddIsteObjective}
        onDeleteItem={handleDeleteIsteObjective}
        placeholder="Start typing to create a new ISTE technology objective"
      />
    </FormPage>
  );
}
