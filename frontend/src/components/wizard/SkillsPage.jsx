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

const SkillsPage = ({formData, prevStep, nextStep, handleSkillsChange}) => {
    const [skillCosts, setSkillCosts] = useState([]);
    const [skillLearning, setSkillLearning] = useState(formData.skills || {});
    const [skillDescriptions, setSkillDescriptions] = useState(formData.descriptions || {});
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
        handleSkillsChange({skills: skillLearning, descriptions: skillDescriptions});
    }, [skillLearning, skillDescriptions, handleSkillsChange]);

    const calculateTotalCost = (newSkillLearning) => {
        return Object.entries(newSkillLearning).reduce((total, [skillKey, times]) => {
            const [skillName, index] = skillKey.split('-');
            const skillCost = skillCosts[parseInt(index)].cost || '0';
            const [costX, costY] = skillCost.split('/').map(Number);
            return total + (times === 1 ? costX : (costX + (costY || 0)));
        }, 0);
    };

    const handleInputChange = (skillKey, value) => {
        if (value > 2) value = 2;
        if (value < 0) value = 0;

        const newSkillLearning = {...skillLearning, [skillKey]: value};
        const newTotalCost = calculateTotalCost(newSkillLearning);

        setSkillLearning(newSkillLearning);
        setTotalCost(newTotalCost);

        if (newTotalCost > 60) {
            setErrorMessage('Total cost cannot exceed 60.');
        } else {
            setErrorMessage('');
        }
    };

    const handleDescriptionChange = (skillKey, value) => {
        const newSkillDescriptions = {...skillDescriptions, [skillKey]: value};
        setSkillDescriptions(newSkillDescriptions);
    };

    return (
        <Box sx={{mt: 4}}>
            <Typography variant="h4" gutterBottom>
                Step 4: Select Skills
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
            <TableContainer component={Paper} sx={{maxWidth: '800px', margin: 'auto', maxHeight: '800px'}}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Category</TableCell>
                            <TableCell>Skill</TableCell>
                            <TableCell>Cost</TableCell>
                            <TableCell>Learn (Times)</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {skillCosts.map((skillCost, index) => {
                            const skillKey = `${skillCost.skillName}-${index}`;
                            return (
                                <TableRow key={skillKey}>
                                    <TableCell>{skillCost.category}</TableCell>
                                    <TableCell>{skillCost.skillName}</TableCell>
                                    <TableCell>{skillCost.cost}</TableCell>
                                    <TableCell>
                                        <TextField
                                            type="number"
                                            inputProps={{
                                                min: 0,
                                                max: 2,
                                                style: {padding: '5px', margin: '0', width: '40px'}
                                            }}
                                            value={skillLearning[skillKey] || 0}
                                            onChange={(e) => handleInputChange(skillKey, parseInt(e.target.value))}
                                            size="small"
                                            sx={{width: '50px'}}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            value={skillDescriptions[skillKey] || ''}
                                            onChange={(e) => handleDescriptionChange(skillKey, e.target.value)}
                                            size="small"
                                        />
                                    </TableCell>
                                </TableRow>
                            );
                        })}
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

export default SkillsPage;