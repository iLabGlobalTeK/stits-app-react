import React from 'react';
import { Box, Typography, Paper, Grid, List, ListItem, ListItemText, Divider } from '@mui/material';

export default function LessonPlanView({ lessonPlan = {} }) {
    return (
        <Paper sx={{ padding: 4, marginTop: 4 }}>
            <Typography variant="h4" gutterBottom>
                {lessonPlan.subject} - {lessonPlan.unit}
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6">Topic:</Typography>
                    <Typography variant="body1">{lessonPlan.topic}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6">Classroom:</Typography>
                    <Typography variant="body1">{lessonPlan.classRoom}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6">Delivery Date:</Typography>
                    <Typography variant="body1">{lessonPlan.deliveryDate}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6">Total Duration:</Typography>
                    <Typography variant="body1">{lessonPlan.totalDuration}</Typography>
                </Grid>
            </Grid>

            <Divider sx={{ marginY: 2 }} />

            <Typography variant="h6">Objectives:</Typography>
            <List dense>
                {lessonPlan.objectives && lessonPlan.objectives.map((objective, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={objective} />
                    </ListItem>
                ))}
            </List>

            <Divider sx={{ marginY: 2 }} />

            <Typography variant="h6">ISTE Objectives:</Typography>
            <List dense>
                {lessonPlan.isteObjectives && lessonPlan.isteObjectives.map((isteObjective, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={isteObjective} />
                    </ListItem>
                ))}
            </List>

            <Divider sx={{ marginY: 2 }} />

            <Typography variant="h6">Methods:</Typography>
            <List dense>
                {lessonPlan.methods && lessonPlan.methods.map((method, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={method} />
                    </ListItem>
                ))}
            </List>

            <Divider sx={{ marginY: 2 }} />

            <Typography variant="h6">Media:</Typography>
            <List dense>
                {lessonPlan.media && lessonPlan.media.map((mediaItem, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            primary={`${mediaItem.type}: `}
                            secondary={<a href={mediaItem.url} target="_blank" rel="noopener noreferrer">{mediaItem.url}</a>}
                        />
                    </ListItem>
                ))}
            </List>

            <Divider sx={{ marginY: 2 }} />

            <Typography variant="h6">Materials:</Typography>
            <List dense>
                {lessonPlan.materials && lessonPlan.materials.map((material, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={`${material.type}: ${material.value}`} />
                    </ListItem>
                ))}
            </List>

            <Divider sx={{ marginY: 2 }} />

            <Typography variant="h6">Notes:</Typography>
            <Typography variant="body1">{lessonPlan.notes}</Typography>

            <Divider sx={{ marginY: 2 }} />

            {/* Add additional sections like pre-assessment, formative, summative, etc. as needed */}
        </Paper>
    );
}
