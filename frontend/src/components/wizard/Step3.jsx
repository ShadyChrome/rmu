import React, { useEffect, useState } from 'react';
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
import { rmuCharacterCreatorApi } from "../../requests/RmuCharacterCreatorApi.js";

const Step3 = ({ formData, prevStep, nextStep }) => {
    const [skillCosts, setSkillCosts] = useState([]);
    const [skillLearning, setSkillLearning] = useState({});
    const [totalCost, setTotalCost] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const maxDP = 60;

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

    const handleInputChange = (skill, value) => {
        if (value > 2) value = 2;
        if (value < 0) value = 0;

        const newSkillLearning = { ...skillLearning, [skill]: value };
        setSkillLearning(newSkillLearning);

        const newTotalCost = Object.entries(newSkillLearning).reduce((total, [skill, times]) => {
            const skillCost = skillCosts.find(s => s.skill === skill)?.cost || "0";
            let cost = 0;

            if (times === 1) {
                cost = parseInt(skillCost.split('/')[0]);
            } else if (times === 2) {
                const [firstCost, secondCost] = skillCost.split('/').map(Number);
                cost = firstCost + (secondCost || firstCost);
            }

            return total + cost;
        }, 0);

        setTotalCost(newTotalCost);

        if (newTotalCost > maxDP) {
            setErrorMessage('Total cost cannot exceed 60.');
        } else {
            setErrorMessage('');
        }
    };

    const remainingDP = maxDP - totalCost;

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Step 3: Select Skills
            </Typography>
            <Typography variant="h6">
                Available DP: {maxDP}
            </Typography>
            <Typography variant="h6" color={remainingDP < 0 ? "error" : "textPrimary"}>
                Remaining DP: {remainingDP}
            </Typography>
            {errorMessage && (
                <Typography variant="body1" color="error">
                    {errorMessage}
                </Typography>
            )}
            <TableContainer component={Paper}>
                <Table>
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
                                        inputProps={{ min: 0, max: 2 }}
                                        value={skillLearning[skillCost.skill] || 0}
                                        onChange={(e) => handleInputChange(skillCost.skill, parseInt(e.target.value))}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={prevStep} sx={{ mr: 2 }}>
                    Back
                </Button>
                <Button variant="contained" color="primary" onClick={nextStep} disabled={remainingDP < 0}>
                    Next
                </Button>
            </Box>
        </Box>
    );
};

export default Step3;
