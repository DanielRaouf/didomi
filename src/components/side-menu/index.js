import AddIcon from '@mui/icons-material/Add';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListIcon from '@mui/icons-material/List';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme } from '@mui/material/styles';
import * as React from 'react';
import { Link } from 'react-router-dom';

const drawerWidth = 200;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #5a5757;
`
const SideMenu = ({ open, setOpen }) => {
    const theme = useTheme();

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const list = () => (
        <List>
            <StyledLink to="/">
                <ListItem button key={'all_consent'}>
                    <ListItemIcon>
                        <ListIcon />
                    </ListItemIcon>
                    <ListItemText primary={'All Consents'} />
                </ListItem>
            </StyledLink>
            <Divider />
            <StyledLink to="/consent">
                <ListItem button key={'give_consent'}>
                    <ListItemIcon>
                        <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Give Consent'} />
                </ListItem>
            </StyledLink>
        </List>
    );

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            {list()}
        </Drawer>
    );
}

export default SideMenu;
