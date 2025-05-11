import * as React from 'react';
import {ListItemIcon, ListSubheader, List, ListItem, IconButton, ListItemButton, ListItemText} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

const Menu = ({ onClick, onKeyDown }) => {
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List>
            <ListItem >
                <IconButton onClick={onClick} onKeyDown={onKeyDown} button sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1.5, display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center' }}>
                    <MenuIcon />
                </IconButton>
            </ListItem>
            <ListItem >
                <ListItemButton component={Link} to={"/home"} sx={{borderBottom: '1px solid', borderColor: 'divider', borderRadius: 1, display: 'flex',}}>
                    <ListItemText primary="HOME" />
                </ListItemButton>
            </ListItem>
            <ListItem >
                <ListItemButton component={Link} to={"/collections/all"}  sx={{borderBottom: '1px solid', borderColor: 'divider', borderRadius: 1, display: 'flex',}}>
                    <ListItemText primary="ALL PRODUCTS" />
                </ListItemButton>
            </ListItem>
            <ListItem >
                <ListItemButton component={Link} to={"/collections"}  sx={{borderBottom: '1px solid', borderColor: 'divider', borderRadius: 1, display: 'flex',}}>
                    <ListItemText primary="COLLECTIONS" />
                </ListItemButton>
            </ListItem>
            <ListItem >
                <ListItemButton component={Link} to={"/pages/contact-us"}  sx={{borderBottom: '1px solid', borderColor: 'divider', borderRadius: 1, display: 'flex',}}>
                    <ListItemText primary="CONTACT" />
                </ListItemButton>
            </ListItem>
            <ListItem >
                <ListItemButton component={Link} to={"/pages/faq"}  sx={{borderBottom: '1px solid', borderColor: 'divider', borderRadius: 1, display: 'flex',}}>
                    <ListItemText primary="FAQ" />
                </ListItemButton>
            </ListItem>
        </List>
        </Box>
    );
};

export default Menu;
