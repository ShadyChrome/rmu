import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import {styled} from '@mui/system';

const Offset = styled('div')`
  height: 64px;
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