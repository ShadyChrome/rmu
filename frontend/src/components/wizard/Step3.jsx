import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography
} from '@mui/material';
import {rmuCharacterCreatorApi} from "../../requests/RmuCharacterCreatorApi";

const Step3 = ({formData, prevStep, nextStep, handleSkillsChange}) => {
    const [skillCosts, setSkillCosts] = useState([]);
    const [skillLearning, setSkillLearning] = useState(formData.skills || {});
    const [totalCost, setTotalCost] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchSkillCosts = async () => {
            try {
                const response = await rmuCharacterCreatorApi.getSkillCost(formData.profession);
                setSkillCosts(response.data);
            } catch (error) {
                console.error('Error fetching skill costs', error);
            }
        };

        if (formData.profession) {
            fetchSkillCosts();
        }
    }, [formData.profession]);

    useEffect(() => {
        handleSkillsChange(skillLearning);
    }, [skillLearning, handleSkillsChange]);

    const calculateTotalCost = (newSkillLearning) => {
        return Object.entries(newSkillLearning).reduce((total, [skill, times]) => {
            const skillCost = skillCosts.find(s => s.skill === skill)?.cost || '0';
            const [costX, costY] = skillCost.split('/').map(Number);
            return total + (times === 1 ? costX : (costX + (costY || 0)));
        }, 0);
    };

    const handleInputChange = (skill, value) => {
        if (value > 2) value = 2;
        if (value < 0) value = 0;

        const newSkillLearning = {...skillLearning, [skill]: value};
        setSkillLearning(newSkillLearning);

        const newTotalCost = calculateTotalCost(newSkillLearning);

        setTotalCost(newTotalCost);

        if (newTotalCost > 60) {
            setErrorMessage('Total cost cannot exceed 60.');
        } else {
            setErrorMessage('');
        }
    };

    return (
        <Box sx={{mt: 4}}>
            <Typography variant="h4" gutterBottom>
                Step 3: Select Skills
            </Typography>
            {errorMessage && (
                <Typography variant="body1" color="error">
                    {errorMessage}
                </Typography>
            )}
            <Typography variant="h6">
                Available DP: 60
            </Typography>
            <Typography variant="h6">
                Remaining DP: {60 - totalCost}
            </Typography>
            <TableContainer component={Paper} sx={{maxWidth: '600px', margin: 'auto'}}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Skill</TableCell>
                            <TableCell>Cost</TableCell>
                            <TableCell>Learn (Times)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {skillCosts.map((skillCost) => (
                            <TableRow key={skillCost.skill}>
                                <TableCell>{skillCost.skill}</TableCell>
                                <TableCell>{skillCost.cost}</TableCell>
                                <TableCell>
                                    <TextField
                                        type="number"
                                        inputProps={{
                                            min: 0,
                                            max: 2,
                                            style: {padding: '5px', margin: '0', width: '40px'}
                                        }}
                                        value={skillLearning[skillCost.skill] || 0}
                                        onChange={(e) => handleInputChange(skillCost.skill, parseInt(e.target.value))}
                                        size="small"
                                        sx={{width: '50px'}}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{mt: 2}}>
                <Button variant="contained" onClick={prevStep} sx={{mr: 2}}>
                    Back
                </Button>
                <Button variant="contained" color="primary" onClick={nextStep} disabled={totalCost > 60}>
                    Next
                </Button>
            </Box>
        </Box>
    );
};

export default Step3;
