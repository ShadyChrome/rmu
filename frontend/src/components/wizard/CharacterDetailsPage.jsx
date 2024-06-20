import React, {useState} from 'react';
import {Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography} from '@mui/material';
import {cultures, professions, races, realms} from '../../common/Constants';

const CharacterDetailsPage = ({formData, handleInputChange, nextStep, setFormData}) => {
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        tempErrors.characterName = formData.characterName ? "" : "This field is required.";
        tempErrors.race = formData.race ? "" : "This field is required.";
        tempErrors.culture = formData.culture ? "" : "This field is required.";
        tempErrors.profession = formData.profession ? "" : "This field is required.";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleNext = () => {
        if (validate()) {
            nextStep();
        }
    };

    const handleProfessionChange = (event) => {
        const selectedProfession = event.target.value;
        const realmIndex = professions.indexOf(selectedProfession);
        const correspondingRealm = realms[realmIndex];
        setFormData(prevFormData => ({
            ...prevFormData,
            profession: selectedProfession,
            realm: correspondingRealm
        }));
    };

    return (
        <Box sx={{mt: 4}}>
            <Typography variant="h4" gutterBottom>
                Step 1: Character Details
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
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
                        <Grid item xs={12} sm={4}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Player Name"
                                value={formData.playerName}
                                onChange={handleInputChange('playerName')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Campaign"
                                value={formData.campaign}
                                onChange={handleInputChange('campaign')}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Level"
                                value={formData.level}
                                onChange={handleInputChange('level')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Current EP"
                                value={formData.currentEP}
                                onChange={handleInputChange('currentEP')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="EP for Next Level"
                                value={formData.epNextLevel}
                                onChange={handleInputChange('epNextLevel')}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                        Appearance
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Sex"
                        value={formData.sex}
                        onChange={handleInputChange('sex')}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Build"
                        value={formData.build}
                        onChange={handleInputChange('build')}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Age"
                        value={formData.age}
                        onChange={handleInputChange('age')}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Skin"
                        value={formData.skin}
                        onChange={handleInputChange('skin')}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Height"
                        value={formData.height}
                        onChange={handleInputChange('height')}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Hair"
                        value={formData.hair}
                        onChange={handleInputChange('hair')}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Weight"
                        value={formData.weight}
                        onChange={handleInputChange('weight')}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
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
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth margin="normal" error={!!errors.race}>
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
                        {errors.race && <Typography variant="body2" color="error">{errors.race}</Typography>}
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth margin="normal" error={!!errors.culture}>
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
                        {errors.culture && <Typography variant="body2" color="error">{errors.culture}</Typography>}
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth margin="normal" error={!!errors.profession}>
                        <InputLabel>Profession</InputLabel>
                        <Select
                            value={formData.profession}
                            onChange={handleProfessionChange}
                            label="Profession"
                        >
                            {professions.map((profession) => (
                                <MenuItem key={profession} value={profession}>
                                    {profession}
                                </MenuItem>
                            ))}
                        </Select>
                        {errors.profession &&
                            <Typography variant="body2" color="error">{errors.profession}</Typography>}
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Realm(s)"
                        value={formData.realm}
                        onChange={handleInputChange('realm')}
                        InputProps={{readOnly: true}}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{mt: 2}}>
                        <Button variant="contained" color="primary" onClick={handleNext}>
                            Next
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CharacterDetailsPage;