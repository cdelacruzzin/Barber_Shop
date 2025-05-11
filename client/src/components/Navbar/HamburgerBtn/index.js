import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

import {forwardRef, useState} from "react";




const HamburgerBtn = ({ onClick, children }) => {
    return (
        <Box>
            <ToggleButton onClick={onClick}>
                <MenuIcon />
            </ToggleButton>
            {children}
        </Box>
    );
};

export default HamburgerBtn;


