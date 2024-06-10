import React from 'react';
import {AppBar, Container, Link, Toolbar, Typography} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';

const Layout = ({children}) => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        RMU Character Creator
                    </Typography>
                    <Link component={RouterLink} to="/" color="inherit" underline="none">
                        Character Creator
                    </Link>
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
        </>
    );
};

export default Layout;
