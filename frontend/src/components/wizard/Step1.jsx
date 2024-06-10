// src/components/wizard/Step1.jsx
import React, { useState } from 'react';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

const Step1 = ({ formData, handleInputChange, nextStep }) => {
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        tempErrors.characterName = formData.characterName ? "" : "This field is required.";
        tempErrors.playerName = formData.playerName ? "" : "This field is required.";
        tempErrors.campaign = formData.campaign ? "" : "This field is required.";
        tempErrors.level = formData.level ? "" : "This field is required.";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleNext = () => {
        if (validate()) {
            nextStep();
        }
    };

    const races = ["Human", "Elf", "Dwarf"]; // This could be fetched from an API or config file
    const cultures = ["Urban", "Rural"]; // This could be fetched from an API or config file
    const professions = ["Fighter", "Mage", "Thief"]; // This could be fetched from an API or config file

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Step 1: Character Details
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Character Name"
                        value={formData.characterName}
                        onChange={handleInputChange('characterName')}
                        error={!!errors.characterName}
                        helperText={errors.characterName}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Player Name"
                        value={formData.playerName}
                        onChange={handleInputChange('playerName')}
                        error={!!errors.playerName}
                        helperText={errors.playerName}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Campaign"
                        value={formData.campaign}
                        onChange={handleInputChange('campaign')}
                        error={!!errors.campaign}
                        helperText={errors.campaign}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                        Level
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Level"
                        value={formData.level}
                        onChange={handleInputChange('level')}
                        error={!!errors.level}
                        helperText={errors.level}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Current EP"
                        value={formData.currentEP}
                        onChange={handleInputChange('currentEP')}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="EP for next level"
                        value={formData.epNextLevel}
                        onChange={handleInputChange('epNextLevel')}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                        Appearance
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Sex"
                        value={formData.sex}
                        onChange={handleInputChange('sex')}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Build"
                        value={formData.build}
                        onChange={handleInputChange('build')}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Age"
                        value={formData.age}
                        onChange={handleInputChange('age')}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Skin"
                        value={formData.skin}
                        onChange={handleInputChange('skin')}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Height"
                        value={formData.height}
                        onChange={handleInputChange('height')}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Hair"
                        value={formData.hair}
                        onChange={handleInputChange('hair')}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Weight"
                        value={formData.weight}
                        onChange={handleInputChange('weight')}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Eyes"
                        value={formData.eyes}
                        onChange={handleInputChange('eyes')}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                        Background
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Race</InputLabel>
                        <Select
                            value={formData.race}
                            onChange={handleInputChange('race')}
                            label="Race"
                        >
                            {races.map((race) => (
                                <MenuItem key={race} value={race}>
                                    {race}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Culture</InputLabel>
                        <Select
                            value={formData.culture}
                            onChange={handleInputChange('culture')}
                            label="Culture"
                        >
                            {cultures.map((culture) => (
                                <MenuItem key={culture} value={culture}>
                                    {culture}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Profession</InputLabel>
                        <Select
                            value={formData.profession}
                            onChange={handleInputChange('profession')}
                            label="Profession"
                        >
                            {professions.map((profession) => (
                                <MenuItem key={profession} value={profession}>
                                    {profession}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Realm(s)"
                        value={formData.realm}
                        onChange={handleInputChange('realm')}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ mt: 2 }}>
                        <Button variant="contained" color="primary" onClick={handleNext}>
                            Next
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Step1;
