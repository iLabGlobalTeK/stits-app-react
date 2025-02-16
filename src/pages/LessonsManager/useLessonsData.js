import { useState, useEffect } from 'react';

export default function useLessonsData() {
    const [lessons, setLessons] = useState([]); // State to store lesson data
    const [loading, setLoading] = useState(true); // State to track loading status

    useEffect(() => {
        // Simulate an API call with a delay
        const fetchLessons = async () => {
            setLoading(true);
            // Simulate network request delay (e.g., 2 seconds)
            await new Promise(resolve => setTimeout(resolve, 2000));
            // Simulate empty data response
            setLessons([]);
            setLoading(false);
        };

        fetchLessons();
    }, []);

    return { lessons, loading };
}
