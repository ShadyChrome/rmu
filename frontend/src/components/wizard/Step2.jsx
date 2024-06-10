import React, { useState } from 'react';
import { Button, Typography, Box, Grid } from '@mui/material';
import BoostSection from './step2/BoostSection';
import StatTable from './step2/StatTable';
import SwapSection from './step2/SwapSection';

const Step2 = ({ formData, handleInputChange, nextStep, prevStep, rollStats }) => {
    const [boostsRemaining, setBoostsRemaining] = useState(2);
    const [swapsRemaining, setSwapsRemaining] = useState(2);
    const [swap1, setSwap1] = useState('');
    const [swap2, setSwap2] = useState('');
    const [rollsDone, setRollsDone] = useState(false);
    const [boostedCells, setBoostedCells] = useState({});
    const [swappedCells, setSwappedCells] = useState({});
    const [boostHistory, setBoostHistory] = useState([]);
    const [swapHistory, setSwapHistory] = useState([]);
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const applyBoost = (boost) => {
        if (boostsRemaining > 0) {
            let statToBoost;
            let prevValues = {};
            let newTemp, newPot;
            switch (boost) {
                case 'boost56':
                    statToBoost = prompt("Enter the stat to boost (e.g., strength):");
                    if (statToBoost && formData[`${statToBoost}Temp`] !== undefined) {
                        prevValues = { temp: formData[`${statToBoost}Temp`], pot: formData[`${statToBoost}Pot`] };
                        formData[`${statToBoost}Temp`] = 56;
                        formData[`${statToBoost}Pot`] = 78;
                        newTemp = 56;
                        newPot = 78;
                    }
                    break;
                case 'boost90':
                    const highestTempStat = Object.keys(formData).filter(key => key.endsWith('Temp')).reduce((a, b) => formData[a] > formData[b] ? a : b);
                    statToBoost = highestTempStat.replace('Temp', '');
                    prevValues = { temp: formData[highestTempStat], pot: formData[`${highestTempStat.replace('Temp', 'Pot')}`] };
                    formData[highestTempStat] = 90;
                    formData[`${highestTempStat.replace('Temp', 'Pot')}`] = Math.min(100, formData[`${highestTempStat.replace('Temp', 'Pot')}`] + 10);
                    newTemp = 90;
                    newPot = Math.min(100, prevValues.pot + 10);
                    break;
                case 'boost85':
                    const sortedTempStats = Object.keys(formData).filter(key => key.endsWith('Temp')).sort((a, b) => formData[b] - formData[a]);
                    const secondHighestTempStat = sortedTempStats[1];
                    statToBoost = secondHighestTempStat.replace('Temp', '');
                    prevValues = { temp: formData[secondHighestTempStat], pot: formData[`${secondHighestTempStat.replace('Temp', 'Pot')}`] };
                    formData[secondHighestTempStat] = 85;
                    formData[`${secondHighestTempStat.replace('Temp', 'Pot')}`] = Math.min(100, formData[`${secondHighestTempStat.replace('Temp', 'Pot')}`] + 10);
                    newTemp = 85;
                    newPot = Math.min(100, prevValues.pot + 10);
                    break;
                case 'gainRoll':
                    const stat1 = prompt("Enter the first stat to gain roll (e.g., strength):");
                    const stat2 = prompt("Enter the second stat to gain roll (e.g., agility):");
                    formData[`${stat1}Pot`] = Math.min(100, formData[`${stat1}Pot`] + rollD100());
                    formData[`${stat2}Pot`] = Math.min(100, formData[`${stat2}Pot`] + rollD100());
                    setFeedbackMessage(`Applied gain rolls: ${stat1.charAt(0).toUpperCase() + stat1.slice(1)} and ${stat2.charAt(0).toUpperCase() + stat2.slice(1)}.`);
                    break;
                default:
                    break;
            }

            if (statToBoost) {
                setBoostedCells(prevState => ({
                    ...prevState,
                    [statToBoost]: boostsRemaining === 2 ? 'lightblue' : 'lightgreen',
                }));
                setBoostHistory(prevHistory => [...prevHistory, { stat: statToBoost, prevValues }]);
                setFeedbackMessage(`Boosted ${statToBoost.charAt(0).toUpperCase() + statToBoost.slice(1)} to Temp: ${newTemp}, Pot: ${newPot}.`);
            }

            setBoostsRemaining(boostsRemaining - 1);
        }
    };

    const revertBoost = () => {
        if (boostHistory.length > 0) {
            const lastBoost = boostHistory.pop();
            formData[`${lastBoost.stat}Temp`] = lastBoost.prevValues.temp;
            formData[`${lastBoost.stat}Pot`] = lastBoost.prevValues.pot;
            setBoostedCells(prevState => {
                const newState = { ...prevState };
                delete newState[lastBoost.stat];
                return newState;
            });
            setBoostHistory(boostHistory);
            setBoostsRemaining(boostsRemaining + 1);
            setFeedbackMessage(`Reverted boost on ${lastBoost.stat.charAt(0).toUpperCase() + lastBoost.stat.slice(1)}.`);
        }
    };

    const handleSwap = () => {
        if (swap1 && swap2 && swapsRemaining > 0) {
            const tempSwap = {
                temp: formData[`${swap1}Temp`],
                pot: formData[`${swap1}Pot`]
            };
            const swapData = {
                stat1: swap1,
                stat2: swap2,
                stat1Values: { temp: formData[`${swap1}Temp`], pot: formData[`${swap1}Pot`] },
                stat2Values: { temp: formData[`${swap2}Temp`], pot: formData[`${swap2}Pot`] }
            };
            formData[`${swap1}Temp`] = formData[`${swap2}Temp`];
            formData[`${swap1}Pot`] = formData[`${swap2}Pot`];
            formData[`${swap2}Temp`] = tempSwap.temp;
            formData[`${swap2}Pot`] = tempSwap.pot;
            setSwappedCells(prevState => ({
                ...prevState,
                [swap1]: true,
                [swap2]: true,
            }));
            setSwapHistory(prevHistory => [...prevHistory, swapData]);
            setSwap1('');
            setSwap2('');
            setSwapsRemaining(swapsRemaining - 1);
            setFeedbackMessage(`Swapped ${swap1.charAt(0).toUpperCase() + swap1.slice(1)} and ${swap2.charAt(0).toUpperCase() + swap2.slice(1)}.`);
        }
    };

    const revertSwap = () => {
        if (swapHistory.length > 0) {
            const lastSwap = swapHistory.pop();
            formData[`${lastSwap.stat1}Temp`] = lastSwap.stat1Values.temp;
            formData[`${lastSwap.stat1}Pot`] = lastSwap.stat1Values.pot;
            formData[`${lastSwap.stat2}Temp`] = lastSwap.stat2Values.temp;
            formData[`${lastSwap.stat2}Pot`] = lastSwap.stat2Values.pot;
            setSwappedCells(prevState => {
                const newState = { ...prevState };
                delete newState[lastSwap.stat1];
                delete newState[lastSwap.stat2];
                return newState;
            });
            setSwapHistory(swapHistory);
            setSwapsRemaining(swapsRemaining + 1);
            setFeedbackMessage(`Reverted swap between ${lastSwap.stat1.charAt(0).toUpperCase() + lastSwap.stat1.slice(1)} and ${lastSwap.stat2.charAt(0).toUpperCase() + lastSwap.stat2.slice(1)}.`);
        }
    };

    const rollD100 = () => {
        let roll;
        do {
            roll = Math.floor(Math.random() * 100) + 1;
        } while (roll < 11);
        return roll;
    };

    const handleRollStats = () => {
        rollStats();
        setRollsDone(true);
        setFeedbackMessage('Rolled stats for all attributes.');
    };

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Step 2: Generate and Assign Stats
            </Typography>
            <Button variant="contained" color="secondary" onClick={handleRollStats} disabled={rollsDone}>
                Roll Dice for Stats
            </Button>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={8}>
                    <StatTable formData={formData} boostedCells={boostedCells} swappedCells={swappedCells} />
                </Grid>
                <Grid item xs={4}>
                    <BoostSection boostsRemaining={boostsRemaining} applyBoost={applyBoost} revertBoost={revertBoost} />
                    <SwapSection
                        swapsRemaining={swapsRemaining}
                        swap1={swap1}
                        setSwap1={setSwap1}
                        swap2={swap2}
                        setSwap2={setSwap2}
                        handleSwap={handleSwap}
                        revertSwap={revertSwap}
                    />
                </Grid>
            </Grid>
            {feedbackMessage && (
                <Box sx={{ mt: 2 }}>
                    <Typography variant="body1" color="primary">
                        {feedbackMessage}
                    </Typography>
                </Box>
            )}
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={prevStep} sx={{ mr: 2 }}>
                    Back
                </Button>
                <Button variant="contained" color="primary" onClick={nextStep}>
                    Next
                </Button>
            </Box>
        </Box>
    );
};

export default Step2;
