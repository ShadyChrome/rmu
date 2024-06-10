// src/components/wizard/Wizard.jsx
import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
// Import other steps as needed

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
        level: '',
        currentEP: '',
        epNextLevel: '',
        strengthTemp: '',
        strengthPot: '',
        agilityTemp: '',
        agilityPot: '',
        constitutionTemp: '',
        constitutionPot: '',
        intelligenceTemp: '',
        intelligencePot: '',
        reasoningTemp: '',
        reasoningPot: '',
        selfDisciplineTemp: '',
        selfDisciplinePot: '',
        empathyTemp: '',
        empathyPot: '',
        intuitionTemp: '',
        intuitionPot: '',
        presenceTemp: '',
        presencePot: '',
        memoryTemp: '',
        memoryPot: '',
    });

    const nextStep = () => setCurrentStep((prev) => prev + 1);
    const prevStep = () => setCurrentStep((prev) => prev - 1);

    const handleInputChange = (input) => (e) => {
        setFormData({ ...formData, [input]: e.target.value });
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
            const newStats = {
                strength: generateStat(),
                agility: generateStat(),
                constitution: generateStat(),
                intelligence: generateStat(),
                reasoning: generateStat(),
                selfDiscipline: generateStat(),
                empathy: generateStat(),
                intuition: generateStat(),
                presence: generateStat(),
                memory: generateStat(),
            };

            return {
                ...prevFormData,
                strengthTemp: newStats.strength.temp,
                strengthPot: newStats.strength.pot,
                agilityTemp: newStats.agility.temp,
                agilityPot: newStats.agility.pot,
                constitutionTemp: newStats.constitution.temp,
                constitutionPot: newStats.constitution.pot,
                intelligenceTemp: newStats.intelligence.temp,
                intelligencePot: newStats.intelligence.pot,
                reasoningTemp: newStats.reasoning.temp,
                reasoningPot: newStats.reasoning.pot,
                selfDisciplineTemp: newStats.selfDiscipline.temp,
                selfDisciplinePot: newStats.selfDiscipline.pot,
                empathyTemp: newStats.empathy.temp,
                empathyPot: newStats.empathy.pot,
                intuitionTemp: newStats.intuition.temp,
                intuitionPot: newStats.intuition.pot,
                presenceTemp: newStats.presence.temp,
                presencePot: newStats.presence.pot,
                memoryTemp: newStats.memory.temp,
                memoryPot: newStats.memory.pot,
            };
        });
    };

    const stepContent = () => {
        switch (currentStep) {
            case 1:
                return <Step1 formData={formData} handleInputChange={handleInputChange} nextStep={nextStep} />;
            case 2:
                return <Step2 formData={formData} handleInputChange={handleInputChange} nextStep={nextStep} prevStep={prevStep} rollStats={rollStats} />;
            case 3:
                return <Step3 formData={formData} handleInputChange={handleInputChange} nextStep={nextStep} prevStep={prevStep} />;
            // Add cases for additional steps
            default:
                return <Step1 formData={formData} handleInputChange={handleInputChange} nextStep={nextStep} />;
        }
    };

    return (
        <div>
            <h1>Character Creation Wizard</h1>
            {stepContent()}
        </div>
    );
};

export default Wizard;
