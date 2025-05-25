import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

import {forwardRef, useState} from "react";
import {IconButton} from "@mui/material";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



const HamburgerBtn = ({ onClick, children }) => {
    return (
        <Box sx={{ p: 1 }}>
            <IconButton onClick={onClick} button sx={{ scale: 1.5, border: '1px solid', borderColor: 'divider', borderRadius: 1.5, display: 'flex',  alignItems: 'center', justifyContent: 'center',
            color: "white"
            }}>
                <MenuIcon/>
            </IconButton>
            {children}
        </Box>
    );
};
export default HamburgerBtn;


