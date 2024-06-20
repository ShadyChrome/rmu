import React from 'react';
import {Box, Container, Typography} from '@mui/material';

const HomePage = () => {
    return (
        <Container maxWidth="md" sx={{mt: 4}}>
            <Box>
                <Typography variant="h4" gutterBottom>
                    Welcome to RMU Character Creator
                </Typography>
                <Typography variant="body1" gutterBottom>
                    RMU Character Creator is a tool designed to help creating characters for the Rolemaster
                    Unified system. The software can be used to:
                </Typography>
                <ul>
                    <li><Typography variant="body1">Generate character stats</Typography></li>
                    <li><Typography variant="body1">Select skills and calculate costs</Typography></li>
                    <li><Typography variant="body1">Assign profession bonuses</Typography></li>
                    <li><Typography variant="body1">Save and view characters</Typography></li>
                </ul>
                <Typography variant="body1">
                    To get started, click on "New..." to create a new character, or "Characters" to view the saved
                    characters.
                </Typography>
            </Box>
        </Container>
    );
};

export default HomePage;
