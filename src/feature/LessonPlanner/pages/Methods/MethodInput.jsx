import { Autocomplete, Chip, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const methodOptions = [
    "WebQuest", "Problem solving", "Flipped classroom", "Inquiry based learning", "Differentiated instruction",
    "Discussion", "Question and Answer", "Lecture", "Videos", "Slide presentations", "Role play/ drama",
    "Story telling", "Demonstrations", "Experiments", "Rotation centres", "Simulations", "Games", "Competitions",
    "Peer tutoring", "Student led classes", "Group work", "Quizzes", "Jig saw", "Individual Projects", "Class projects",
    "Games", "Competitions", "Field trips (actual, virtual)", "Resource person", "Debates", "Panel discussions",
    "Journalling", "Case studies", "Brainstorming", "Concept mapping"
];

export default function MethodInput({ methods, setMethods }) {
    return (
        <Autocomplete
            multiple
            freeSolo
            options={methodOptions}
            value={methods}
            onChange={(event, newValue) => {
                setMethods(newValue);
            }}
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip variant="outlined" label={option} {...getTagProps({ index })} key={index} />
                ))
            }
            renderInput={(params) => (
                <StyledTextField
                    {...params}
                    variant="outlined"
                    placeholder="Start typing to create or select a method"
                />
            )}
        />
    );
}

// Styled Components
const StyledTextField = styled(TextField)({
    '& .MuiInputBase-root': {
        fontSize: '1rem',
    },
});
