import React from 'react';
import {Box, Button, FormControl, InputLabel, MenuItem, Select, Typography} from '@mui/material';
import {stats} from '../../../common/Constants';

const SwapSection = ({swapsRemaining, swap1, setSwap1, swap2, setSwap2, handleSwap, revertSwap}) => {
    return (
        <Box sx={{ml: 2}}>
            <Typography variant="h6" gutterBottom>
                Swaps (Remaining: {swapsRemaining})
            </Typography>
            <FormControl fullWidth margin="normal">
                <InputLabel>First Stat to Swap</InputLabel>
                <Select value={swap1} onChange={(e) => setSwap1(e.target.value)}>
                    {stats.map((stat) => (
                        <MenuItem key={stat} value={stat}>{stat.charAt(0).toUpperCase() + stat.slice(1)}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
                <InputLabel>Second Stat to Swap</InputLabel>
                <Select value={swap2} onChange={(e) => setSwap2(e.target.value)}>
                    {stats.map((stat) => (
                        <MenuItem key={stat} value={stat}>{stat.charAt(0).toUpperCase() + stat.slice(1)}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button
                variant="contained"
                onClick={handleSwap}
                sx={{mt: 2}}
                disabled={swapsRemaining <= 0 || !swap1 || !swap2 || swap1 === swap2}
            >
                Apply Swap
            </Button>
            <Button
                variant="contained"
                color="error"
                onClick={revertSwap}
                sx={{mt: 2}}
            >
                Revert Last Swap
            </Button>
        </Box>
    );
};

export default SwapSection;