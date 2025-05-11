import * as React from 'react';
import Box from '@mui/material/Box';
import {ListItemIcon, ListSubheader, List, ListItem, IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleButton from "@mui/material/ToggleButton";

const Menu = ({ onClick, onKeyDown }) => {
    return (
        <List>
            <ListItem >
                <IconButton onClick={onClick} onKeyDown={onKeyDown} button sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1.5, display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center' }}>
                    <MenuIcon />
                </IconButton>
            </ListItem>
        </List>

    );
};

export default Menu;
