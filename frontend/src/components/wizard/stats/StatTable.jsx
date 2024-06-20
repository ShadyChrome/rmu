import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from '@mui/material';
import {stats} from "../../../common/Constants.js";

const StatTable = ({formData, boostedCells}) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="character stats table">
                <TableHead>
                    <TableRow>
                        <TableCell>Stats</TableCell>
                        <TableCell>Temporary Stat</TableCell>
                        <TableCell>Potential Stat</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {stats.map((stat) => (
                        <TableRow key={stat} sx={{height: '30px'}}>
                            <TableCell component="th" scope="row">
                                {stat.charAt(0).toUpperCase() + stat.slice(1)}
                            </TableCell>
                            <TableCell sx={{backgroundColor: boostedCells[stat] || 'inherit'}}>
                                <Typography variant="body2">
                                    {formData[`${stat}Temp`]}
                                </Typography>
                            </TableCell>
                            <TableCell sx={{backgroundColor: boostedCells[stat] || 'inherit'}}>
                                <Typography variant="body2">
                                    {formData[`${stat}Pot`]}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default StatTable;