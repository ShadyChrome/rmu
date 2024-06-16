import React, {useState} from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import {rmuCharacterCreatorApi} from "../../requests/RmuCharacterCreatorApi";
import {stats} from "../../common/Constants.js";

const Wizard = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
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
        skills: {} // Added field for skill learning data
    });

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
            skills
        }));
    };

    const saveCharacter = async () => {
        try {
            await rmuCharacterCreatorApi.saveCharacter(formData);
            alert('Character saved successfully!');
        } catch (error) {
            console.error('Error saving character', error);
            alert('Failed to save character.');
        }
    };

    const handleNextStep = () => {
        if (currentStep === 3) {
            saveCharacter();
        }
        nextStep();
    };

    const stepContent = () => {
        switch (currentStep) {
            case 1:
                return <Step1 formData={formData} handleInputChange={handleInputChange} nextStep={handleNextStep}
                              setFormData={setFormData}/>;
            case 2:
                return <Step2 formData={formData} handleInputChange={handleInputChange} nextStep={handleNextStep}
                              prevStep={prevStep} rollStats={rollStats}/>;
            case 3:
                return <Step3 formData={formData} handleInputChange={handleInputChange} nextStep={handleNextStep}
                              prevStep={prevStep} handleSkillsChange={handleSkillsChange}/>;
            default:
                return <Step1 formData={formData} handleInputChange={handleInputChange} nextStep={handleNextStep}
                              setFormData={setFormData}/>;
        }
    };

    return (
        <div>
            {stepContent()}
        </div>
    );
};

export default Wizard;
