import { useState } from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function MethodDesc() {
    const [showFullText, setShowFullText] = useState(false);

    const handleReadMore = () => {
        setShowFullText(true);
    };

    return (
        <Box sx={{ mb: 2, textAlign: "left" }}>
            {!showFullText && (
                <Link component="button" variant="body2" onClick={handleReadMore}>
                    Read more
                </Link>
            )}
            {showFullText && (
                <Typography variant="body2" sx={{ mt: 1, width: "80ch" }}>
                    Teaching strategies are the methods and techniques used by teachers to guide students through their learning journey. Choose strategies that best fit the topic, the learners' experience level, and their stage in learning. These strategies can be teacher-centered or student-centered, and may involve high-tech or low-tech materials.
                </Typography>
            )}
        </Box>
    );
}
