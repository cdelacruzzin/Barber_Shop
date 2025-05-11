import React, { useState} from "react";
import { Box } from "@mui/system";
import { useStoreContext } from "../../utils/globalState";
import {UPDATE_CURRENT_CATEGORY} from '../../utils/actions';
import HamburgerBtn from "./HamburgerBtn";


import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


const Navbar = () => {

    const [state, setState] = React.useState({
        left: false,
        right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'left' || anchor === 'right' ? 350 :  'auto' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
        </Box>
    );


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
                <HamburgerBtn anchor="left" onClick={toggleDrawer("left", true)}>
                    <Drawer
                        anchor={"left"}
                        open={state["left"]}
                        onClose={toggleDrawer("left", false)}>
                        {list("left")}
                    </Drawer>

                </HamburgerBtn>




            </Box>
        </header >
    )
}
export default Navbar;