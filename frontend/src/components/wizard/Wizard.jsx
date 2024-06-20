import React, {useState} from 'react';
import CharacterDetailsPage from './CharacterDetailsPage';
import StatsPage from './StatsPage';
import SkillsPage from './SkillsPage';
import ProfessionBonusesPage from './ProfessionBonusesPage';
import {rmuCharacterCreatorApi} from "../../requests/RmuCharacterCreatorApi";
import {stats} from "../../common/Constants.js";
import {Alert, Snackbar} from '@mui/material';

const initialFormData = {
    characterName: '',
    playerName: '',
    campaign: '',
    sex: '',
    age: '',
    height: '',
    weight: '',
    build: '',
    skin: '',
    hair: '',
    eyes: '',
    race: '',
    culture: '',
    profession: '',
    realm: '',
    level: '1',
    currentEP: '0',
    epNextLevel: '10000',
    agilityTemp: '',
    agilityPot: '',
    constitutionTemp: '',
    constitutionPot: '',
    empathyTemp: '',
    empathyPot: '',
    intuitionTemp: '',
    intuitionPot: '',
    memoryTemp: '',
    memoryPot: '',
    presenceTemp: '',
    presencePot: '',
    quicknessTemp: '',
    quicknessPot: '',
    reasoningTemp: '',
    reasoningPot: '',
    selfDisciplineTemp: '',
    selfDisciplinePot: '',
    strengthTemp: '',
    strengthPot: '',
    skills: {}, // Added field for skill learning data
    bonuses: [], // Added field for profession bonuses
    knacks: []  // Added field for knacks
};

const Wizard = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState(initialFormData);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const nextStep = () => setCurrentStep((prev) => prev + 1);
    const prevStep = () => setCurrentStep((prev) => prev - 1);

    const handleInputChange = (input) => (e) => {
        setFormData({...formData, [input]: e.target.value});
    };

    const rollStats = () => {
        const rollD100 = () => {
            let roll;
            do {
                roll = Math.floor(Math.random() * 100) + 1;
            } while (roll < 11);
            return roll;
        };

        const generateStat = () => {
            const rolls = [rollD100(), rollD100(), rollD100()].sort((a, b) => a - b);
            return {
                temp: rolls[1],
                pot: rolls[2],
            };
        };

        setFormData((prevFormData) => {
            const newStats = {};
            stats.forEach(stat => {
                const {temp, pot} = generateStat();
                newStats[`${stat}Temp`] = temp;
                newStats[`${stat}Pot`] = pot;
            });

            return {
                ...prevFormData,
                ...newStats,
            };
        });
    };

    const handleSkillsChange = (skills) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            skills: skills.skills,
            descriptions: skills.descriptions
        }));
    };

    const handleBonusChange = (bonuses) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            bonuses
        }));
    };

    const handleKnackChange = (knacks) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            knacks
        }));
    };

    const saveCharacter = async () => {
        try {
            await rmuCharacterCreatorApi.saveCharacter(formData);
            setSnackbarMessage('Character saved successfully!');
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
            resetForm();
        } catch (error) {
            console.error('Error saving character', error);
            setSnackbarMessage('Failed to save character.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        }
    };

    const resetForm = () => {
        setFormData(initialFormData);
        setCurrentStep(1);
    };

    const handleNextStep = () => {
        if (currentStep === 4) {
            saveCharacter();
        } else {
            nextStep();
        }
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    const stepContent = () => {
        switch (currentStep) {
            case 1:
                return <CharacterDetailsPage formData={formData} handleInputChange={handleInputChange}
                                             nextStep={handleNextStep}
                                             setFormData={setFormData}/>;
            case 2:
                return <StatsPage formData={formData} handleInputChange={handleInputChange} nextStep={handleNextStep}
                                  prevStep={prevStep} rollStats={rollStats}/>;
            case 3:
                return <ProfessionBonusesPage formData={formData} handleBonusChange={handleBonusChange}
                                              handleKnackChange={handleKnackChange} nextStep={handleNextStep}
                                              prevStep={prevStep}/>;
            case 4:
                return <SkillsPage formData={formData} handleInputChange={handleInputChange} nextStep={handleNextStep}
                                   prevStep={prevStep} handleSkillsChange={handleSkillsChange}/>;
            default:
                return <CharacterDetailsPage formData={formData} handleInputChange={handleInputChange}
                                             nextStep={handleNextStep}
                                             setFormData={setFormData}/>;
        }
    };

    return (
        <div>
            {stepContent()}
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{width: '100%'}}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Wizard;