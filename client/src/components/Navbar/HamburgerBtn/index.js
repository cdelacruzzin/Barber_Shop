import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

import {forwardRef, useState} from "react";
import {IconButton} from "@mui/material";




const HamburgerBtn = ({ onClick, children }) => {
    return (
        <Box>
            <IconButton onClick={onClick} button sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1.5, display: 'flex',
                alignItems: 'center',
                justifyContent: 'center' }}>
                <MenuIcon />
            </IconButton>
            {children}
        </Box>
    );
};

export default HamburgerBtn;


