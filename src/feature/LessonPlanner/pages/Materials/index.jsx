import { useState, useContext, useEffect } from 'react';
import FormPage from '../../common/FormPage';
import MaterialInput from './MaterialInput';
import MaterialList from './MaterialList';
import { FormContext } from '../..';

export default function Materials({ page }) {
    const { formData, setFormData } = useContext(FormContext)

    const [materials, setMaterials] = useState(formData.materials || []);

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            materials,
        }));
    }, [materials, setFormData]);

    const handleAddMaterial = (material) => {
        setMaterials([...materials, material]);
    };

    const handleDeleteMaterial = (index) => {
        setMaterials(materials.filter((_, i) => i !== index));
    };

    return (
        <FormPage
            header="Instructional Materials"
            contentTitle="Add Instructional Materials"
            contentSubtitle="Attach media resources that will be used to support the instruction. These can include documents, tests, assignments, quizzes, websites, and other types of materials."
            page={page}
        >
            <MaterialInput onAddMaterial={handleAddMaterial} />
            <MaterialList materials={materials} onDeleteMaterial={handleDeleteMaterial} />
        </FormPage>
    );
}
