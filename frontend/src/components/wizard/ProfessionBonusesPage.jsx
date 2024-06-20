import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Checkbox,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import {rmuCharacterCreatorApi} from "../../requests/RmuCharacterCreatorApi";

const ProfessionBonusesPage = ({formData, prevStep, nextStep, handleBonusChange, handleKnackChange}) => {
    const [professionBonuses, setProfessionBonuses] = useState([]);
    const [selectedBonuses, setSelectedBonuses] = useState(formData.bonuses || []);
    const [selectedKnacks, setSelectedKnacks] = useState(formData.knacks || []);

    useEffect(() => {
        const fetchProfessionBonuses = async () => {
            try {
                const response = await rmuCharacterCreatorApi.getProfessionBonuses(formData.profession);
                setProfessionBonuses(response.data);
            } catch (error) {
                console.error('Error fetching profession bonuses', error);
            }
        };

        if (formData.profession) {
            fetchProfessionBonuses();
        }
    }, [formData.profession]);

    const handleBonusCheckboxChange = (skillName) => {
        const currentIndex = selectedBonuses.indexOf(skillName);
        const newSelectedBonuses = [...selectedBonuses];

        if (currentIndex === -1) {
            if (newSelectedBonuses.length < 10) {
                newSelectedBonuses.push(skillName);
            }
        } else {
            newSelectedBonuses.splice(currentIndex, 1);
        }

        setSelectedBonuses(newSelectedBonuses);
        handleBonusChange(newSelectedBonuses);
    };

    const handleKnackCheckboxChange = (skillName) => {
        const currentIndex = selectedKnacks.indexOf(skillName);
        const newSelectedKnacks = [...selectedKnacks];

        if (currentIndex === -1) {
            if (newSelectedKnacks.length < 2) {
                newSelectedKnacks.push(skillName);
            }
        } else {
            newSelectedKnacks.splice(currentIndex, 1);
        }

        setSelectedKnacks(newSelectedKnacks);
        handleKnackChange(newSelectedKnacks);
    };

    return (
        <Box sx={{mt: 4}}>
            <Typography variant="h4" gutterBottom>
                Select Profession Bonuses and Knacks
            </Typography>
            <Typography variant="body1" gutterBottom>
                Select up to 10 bonuses and 2 knacks for your profession.
            </Typography>
            <Typography variant="body1" gutterBottom>
                {`Selected Bonuses: ${selectedBonuses.length} / 10`}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {`Selected Knacks: ${selectedKnacks.length} / 2`}
            </Typography>
            <TableContainer component={Paper} sx={{maxWidth: '800px', margin: 'auto'}}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Bonus</TableCell>
                            <TableCell>Knack</TableCell>
                            <TableCell>Skill Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {professionBonuses.map((bonus) => (
                            <TableRow key={bonus.id}>
                                <TableCell>
                                    <Checkbox
                                        checked={selectedBonuses.includes(bonus.skillName)}
                                        onChange={() => handleBonusCheckboxChange(bonus.skillName)}
                                        disabled={!selectedBonuses.includes(bonus.skillName) && selectedBonuses.length >= 10}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Checkbox
                                        checked={selectedKnacks.includes(bonus.skillName)}
                                        onChange={() => handleKnackCheckboxChange(bonus.skillName)}
                                        disabled={!selectedKnacks.includes(bonus.skillName) && selectedKnacks.length >= 2}
                                    />
                                </TableCell>
                                <TableCell>{bonus.skillName}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{mt: 2}}>
                <Button variant="contained" onClick={prevStep} sx={{mr: 2}}>
                    Back
                </Button>
                <Button variant="contained" color="primary" onClick={nextStep}>
                    Next
                </Button>
            </Box>
        </Box>
    );
};

export default ProfessionBonusesPage;