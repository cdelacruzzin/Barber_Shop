import React, { useState} from "react";
import { Link as RouterLink} from "react-router-dom";
import { Box } from "@mui/system";
import { Tabs, Tab, Link as MuiLink } from '@mui/material';
import { useStoreContext } from "../../utils/globalState";
import {UPDATE_CURRENT_CATEGORY} from '../../utils/actions';
import HamburgerBtn from "../HamburgerBtn";


const Navbar = () => {

    const [value, setValue] = useState(0);  // Start with first tab
    const [open, setOpen] = useState(false);

    const [state, dispatch] = useStoreContext();

    function resetCategory() {
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: {id:'', name:''}
        })
    }

    const handleToggle = (state) => () => {
        setOpen(state);
    };

    return (
        <header>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
            }}>
                <HamburgerBtn></HamburgerBtn>


            </Box>
        </header >
    )
}
export default Navbar;