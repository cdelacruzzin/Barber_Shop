import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import MenuIcon from '@mui/icons-material/Menu';

import {forwardRef, useState} from "react";




const HamburgerBtn = () => {
    const [toggled, settToggle] = useState(false);
    const handleToggle = () => {
        settToggle((prev => !prev));
    }
    return (
            <ToggleButton value={toggled} onClick={handleToggle}>
                <MenuIcon />
            </ToggleButton>
    )

}
export default HamburgerBtn;


