import { useState, useContext, useEffect } from 'react';
import FormPage from '../../common/FormPage';
import MediaInput from './MediaInput';
import MediaTable from './MediaTable';
import { FormContext } from '../..';

export default function Media({ page }) {
    const { formData, setFormData } = useContext(FormContext);
    const [media, setMedia] = useState(formData.media || []);

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            media,
        }));
    }, [media, setFormData]);

    const handleAddMedia = ({ type, url }) => {
        setMedia([...media, { type, url }]);
    };

    const handleDeleteMedia = (index) => {
        const newMedia = media.filter((_, i) => i !== index);
        setMedia(newMedia); // Update the state with the new list
    };

    return (
        <FormPage
            header="Instructional Media"
            contentTitle="Add Instructional Media"
            contentSubtitle="Attach media resources that will be used to support the instruction. These can include videos, documents, links, and other types of media."
            page={page}
        >
            <MediaInput onAddMedia={handleAddMedia} />
            <MediaTable media={media} onDeleteMedia={handleDeleteMedia} />
        </FormPage>
    );
}
