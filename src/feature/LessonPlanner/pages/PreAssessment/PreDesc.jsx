import React, { useState } from 'react';
import { Typography, Button, Box } from '@mui/material';

export default function PreDesc() {
    const [showMore, setShowMore] = useState(false);

    const toggleReadMore = () => {
        setShowMore(!showMore);
    };

    return (
        <Box sx={{ marginTop: 2 }}>
            <Typography variant="body1">
                Pre-assessment activities are crucial for understanding the students' prior knowledge and readiness for the lesson.
                These activities can help identify areas where students may need additional support or where they excel.
                {showMore && (
                    <Typography component="span" variant="body2">
                        <br /><br />
                        Pre-assessment activities can take place either in class or at home. In-class activities might include quizzes,
                        brainstorming sessions, or quick discussions to gauge student understanding. At-home activities could involve
                        watching videos, completing worksheets, or reflecting on previous lessons. The goal is to gather information
                        about students&apos; current knowledge and skills so that the lesson can be tailored to meet their needs.
                        <br /><br />
                        It&apos;s important to keep pre-assessment activities brief and focused. These activities should not feel like
                        formal tests but rather opportunities for students to share what they already know in a low-stakes environment.
                        Teachers can use this information to adjust their lesson plans and ensure that all students are engaged and supported.
                    </Typography>
                )}
            </Typography>
            <Button onClick={toggleReadMore} sx={{ marginTop: 1 }}>
                {showMore ? 'Read Less' : 'Read More'}
            </Button>
        </Box>
    );
}
