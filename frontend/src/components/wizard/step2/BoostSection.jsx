import React from 'react';
import { Button, Typography, Box } from '@mui/material';

const BoostSection = ({ boostsRemaining, applyBoost, revertBoost }) => (
    <Box sx={{ ml: 2 }}>
        <Typography variant="h6" gutterBottom>
            Apply Boosts (Remaining: {boostsRemaining})
        </Typography>
        <Button
            variant="contained"
            onClick={() => applyBoost('boost56')}
            sx={{ mr: 2, mb: 1 }}
            disabled={boostsRemaining <= 0}
        >
            Apply Boost 56/78
        </Button>
        <Button
            variant="contained"
            onClick={() => applyBoost('boost90')}
            sx={{ mr: 2, mb: 1 }}
            disabled={boostsRemaining <= 0}
        >
            Apply Boost 90
        </Button>
        <Button
            variant="contained"
            onClick={() => applyBoost('boost85')}
            sx={{ mr: 2, mb: 1 }}
            disabled={boostsRemaining <= 0}
        >
            Apply Boost 85
        </Button>
        <Button
            variant="contained"
            onClick={() => applyBoost('gainRoll')}
            sx={{ mr: 2, mb: 1 }}
            disabled={boostsRemaining <= 0}
        >
            Make Two Stat Gain Rolls
        </Button>
        <Button
            variant="contained"
            color="error"
            onClick={revertBoost}
            sx={{ mr: 2, mt: 1 }}
        >
            Revert Last Boost
        </Button>
    </Box>
);

export default BoostSection;
