import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import {styled} from '@mui/system';

const Offset = styled('div')`
  height: 64px; // Adjust based on your AppBar's height (default is 64px)
`;

const LinkButton = styled(Button)`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const Layout = ({children}) => {
    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" sx={{flexGrow: 1}}>
                        RMU Character Creator
                    </Typography>
                    <LinkButton component={Link} to="/create">
                        New...
                    </LinkButton>
                    <LinkButton component={Link} to="/characters">
                        Characters
                    </LinkButton>
                </Toolbar>
            </AppBar>
            <Offset/>
            <div>
                {children}
            </div>
        </>
    );
};

export default Layout;
