import { useState, useEffect, useContext } from 'react';
import FormPage from '../../common/FormPage';
import MethodDesc from './MethodDesc';
import MethodInput from './MethodInput';
import { FormContext } from '../..';

export default function Methods({ page }) {
    const { formData, setFormData } = useContext(FormContext);

    const [methods, setMethods] = useState(formData.methods || [""]);

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            methods,
        }));
    }, [methods, setFormData]);

    return (
        <FormPage
            header="Instructional Methods"
            contentTitle="Choose Instructional Method"
            contentSubtitle="Teaching strategies are the methods and techniques used by teachers to guide students through their learning journey."
            page={page}
        >
            <MethodDesc />
            <MethodInput methods={methods} setMethods={setMethods} />
        </FormPage>
    );
}
