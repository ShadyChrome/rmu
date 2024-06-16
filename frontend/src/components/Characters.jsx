import React, {useEffect, useState} from 'react';
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from '@mui/material';
import {rmuCharacterCreatorApi} from "../requests/RmuCharacterCreatorApi";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await rmuCharacterCreatorApi.getAllCharacters();
                setCharacters(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching characters', error);
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    if (loading) {
        return <Typography variant="h6">Loading...</Typography>;
    }

    return (
        <Box sx={{mt: 4}}>
            <Typography variant="h4" gutterBottom>
                Characters
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Character Name</TableCell>
                            <TableCell>Player Name</TableCell>
                            <TableCell>Campaign</TableCell>
                            <TableCell>Profession</TableCell>
                            {/* Add other relevant columns */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {characters.map((character) => (
                            <TableRow key={character.id}>
                                <TableCell>{character.id}</TableCell>
                                <TableCell>{character.characterName}</TableCell>
                                <TableCell>{character.playerName}</TableCell>
                                <TableCell>{character.campaign}</TableCell>
                                <TableCell>{character.profession}</TableCell>
                                {/* Add other relevant data */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Characters;
